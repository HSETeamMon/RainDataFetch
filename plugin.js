// Minimal Windy Plugin test

export function onopen() {
    console.log("✅ Plugin opened");
    document.getElementById("plugin-content").innerHTML += "<p>Plugin JavaScript loaded successfully!</p>";
}

export function onclose() {
    console.log("❌ Plugin closed");
}
