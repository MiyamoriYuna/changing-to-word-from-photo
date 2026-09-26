// =========================
// 問題保存
// =========================

function saveProblem() {

  const problem = {
    material: document.getElementById("material").value,
    subject: document.getElementById("subject").value,
    unit: document.getElementById("unit").value,
    keywords: document.getElementById("keywords").value,
    page: document.getElementById("page").value,
    text: document.getElementById("problem").value,
    answer: document.getElementById("answer").value
  };

  if (!problem.text.trim()) {
    alert("問題文を入力してください。");
    return;
  }

  alert("問題を保存しました。\n\n※現在は画面確認用です。");

  window.location.href = "index.html";
}


// =========================
// 検索
// =========================

function searchProblems() {

  const keyword =
    document.getElementById("searchInput").value.trim();

  if (!keyword) {
    alert("検索キーワードを入力してください。");
    return;
  }

  alert(
    "「" +
    keyword +
    "」で検索します。\n\n" +
    "※検索機能は次の段階で実装します。"
  );
}
