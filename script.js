// تابعی برای تبدیل رشته ورودی به مجموعه جاوااسکریپت
function parseSet(input) {
  if (!input.trim()) return new Set();
  return new Set(input.split(",").map(x => x.trim()));
}

// توابع اصلی عملیات مجموعه‌ها
function union(a, b) {
  return new Set([...a, ...b]);
}

function intersection(a, b) {
  return new Set([...a].filter(x => b.has(x)));
}

function difference(a, b) {
  return new Set([...a].filter(x => !b.has(x)));
}

// تابع اصلی محاسبه و نمایش نتایج
function calculateOperations(a, b) {
  const unionResult = [...union(a, b)].join(", ");
  const intersectionResult = [...intersection(a, b)].join(", ");
  const differenceResult = [...difference(a, b)].join(", ");
  const reverseDiffResult = [...difference(b, a)].join(", ");

  const resultsHTML = `
    <h2>نتایج عملیات مجموعه‌ها:</h2>
    <p><strong>🔹 اجتماع (A ∪ B):</strong> ${unionResult || "∅"}</p>
    <p><strong>🔸 اشتراک (A ∩ B):</strong> ${intersectionResult || "∅"}</p>
    <p><strong>⚫ تفاضل (A − B):</strong> ${differenceResult || "∅"}</p>
    <p><strong>⚫ تفاضل (B − A):</strong> ${reverseDiffResult || "∅"}</p>
  `;
  document.getElementById("result").innerHTML = resultsHTML;
}

// رویداد کلیک دکمه محاسبه
document.getElementById("calculateBtn").addEventListener("click", () => {
  const setA = parseSet(document.getElementById("setA").value);
  const setB = parseSet(document.getElementById("setB").value);
  calculateOperations(setA, setB);
});
