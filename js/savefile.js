export const saveAsZipAsync = async (fileName, base64Str) => {
    // convert blob
    const byteChars = atob(base64Str);
    const byteNumers = new Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) {
        byteNumers[i] = byteChars.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumers);
    const blob = new Blob([byteArray], { type: "application/zip" });

    // create a link element with blob and click it
    const link = document.createElement("a");
    const url = window.URL.createObjectURL(blob);
    link.href = url
    link.download = fileName
    link.click();

    link.remove();
    window.URL.revokeObjectURL(url);
}