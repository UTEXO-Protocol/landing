// services/downloadService.ts
import JSZip from "jszip";
import { saveAs } from "file-saver";

type Format = "png" | "svg";
type Theme = "dark" | "white";

interface DownloadOptions {
  iconNames: string[];
  format: Format;
  themes?: Theme[];
}

const fetchFile = async (url: string): Promise<Blob> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }
  return response.blob();
};

const downloadSingleFile = (url: string, fileName: string): void => {
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.style.display = "none";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadAssets = async ({ iconNames, format, themes }: DownloadOptions): Promise<void> => {
  const files: { url: string; fileName: string }[] = [];

  iconNames.forEach(iconName => {
    if (themes && themes.length > 0) {
      themes.forEach(theme => {
        const fileName = `${iconName}-${theme}.${format}`;
        const imageUrl = `/brand-kit/downloads/${fileName}`;
        files.push({ url: imageUrl, fileName });
      });
    } else {
      const fileName = `${iconName}.${format}`;
      const imageUrl = `/brand-kit/downloads/${fileName}`;
      files.push({ url: imageUrl, fileName });
    }
  });

  if (files.length > 1) {
    const zip = new JSZip();

    const promises = files.map(async ({ url, fileName }) => {
      try {
        const blob = await fetchFile(url);
        zip.file(fileName, blob);
      } catch (error) {
        console.error(`Failed to add ${fileName} to zip:`, error);
      }
    });

    console.log(promises);

    await Promise.all(promises);

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipFileName = `${iconNames.length > 1 ? "icons" : iconNames[0]}-${format}.zip`;
    saveAs(zipBlob, zipFileName);
  } else if (files.length === 1) {
    downloadSingleFile(files[0].url, files[0].fileName);
  }
};
