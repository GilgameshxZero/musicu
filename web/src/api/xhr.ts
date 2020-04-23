export default function xhrGet(
  url: string,
  onSuccess: (response: string) => void,
  onFailure: (status: number) => void = () => {}) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) return;
    if (xhr.status < 200 || xhr.status >= 300) onFailure(xhr.status);
    else onSuccess(xhr.responseText);
  };
  xhr.send();
};
