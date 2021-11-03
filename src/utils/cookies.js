function saveAuthToCookie(value) {
  document.cookie = `Authorization=${value}`;
}

function deleteAuthToCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export { saveAuthToCookie, deleteAuthToCookie };
