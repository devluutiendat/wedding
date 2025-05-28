import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

export const pdfConvert = async () => {
  const invitationElement = document.getElementById("invitation");
  if (!invitationElement) {
    throw new Error("Invitation element not found");
  }
  const canvas = await html2canvas(invitationElement, { scale: 2 });
  const data = canvas.toDataURL("image/png");

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: "a4",
    putOnlyUsedFonts: true,
    floatPrecision: 16,
  });

  console.log(data);
  const imageProperties = doc.getImageProperties(data);
  const pdfWidth = doc.internal.pageSize.getWidth();
  const pdfHeight = (imageProperties.height * pdfWidth) / imageProperties.width;

  doc.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  
  return doc.output('arraybuffer');
};
