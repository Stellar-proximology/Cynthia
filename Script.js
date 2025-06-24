async function getGeo() {
  const location = document.getElementById("location").value;
  const birthdate = document.getElementById("birthdate").value;

  const response = await fetch("/get-geo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ location, birthdate })
  });

  const data = await response.json();
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
}
