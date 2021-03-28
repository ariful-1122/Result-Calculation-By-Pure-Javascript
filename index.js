const resultBtn = document.querySelector(".result-btn");

const calcGpa = function (sub) {
  if (sub >= 80 && sub <= 100) {
    return "A+ 5";
  } else if (sub <= 79 && sub >= 70) {
    return "A 4";
  } else if (sub <= 69 && sub >= 60) {
    return "A- 3.5";
  } else if (sub <= 59 && sub >= 50) {
    return "B 3";
  } else if (sub <= 49 && sub >= 40) {
    return "C 2";
  } else if (sub <= 39 && sub >= 33) {
    return "D 1";
  } else if (sub >= 0 && sub <= 32) {
    return "F 0";
  } else {
    alert(`Please enter a valid Number within 1-100`);
  }
};

const grade = function (sub) {
  return sub.split(" ")[0];
};
const numOfGpa = function (sub) {
  return sub.split(" ")[1];
};

resultBtn.addEventListener("click", function (e) {
  let banglaNum = Number(document.getElementById("ban").value);
  let engNum = Number(document.getElementById("eng").value);
  let mathNum = Number(document.getElementById("math").value);
  let phyNum = Number(document.getElementById("phy").value);
  let chemNum = Number(document.getElementById("chem").value);
  let bioNum = Number(document.getElementById("bio").value);
  let ictNum = Number(document.getElementById("ict").value);

  if (
    banglaNum === 0 ||
    engNum === 0 ||
    mathNum === 0 ||
    phyNum === 0 ||
    chemNum === 0 ||
    bioNum === 0 ||
    ictNum === 0
  ) {
    alert("Please Fillup All Fields To Get Result...");
  } else {
    const banglaRes = grade(calcGpa(banglaNum));
    const engRes = grade(calcGpa(engNum));
    const mathRes = grade(calcGpa(mathNum));
    const phyRes = grade(calcGpa(phyNum));
    const chemRes = grade(calcGpa(chemNum));
    const bioRes = grade(calcGpa(bioNum));
    const ictRes = grade(calcGpa(ictNum));

    const banglaPoint = Number(numOfGpa(calcGpa(banglaNum)));
    const engPoint = Number(numOfGpa(calcGpa(engNum)));
    const mathPoint = Number(numOfGpa(calcGpa(mathNum)));
    const phyPoint = Number(numOfGpa(calcGpa(phyNum)));
    const chemPoint = Number(numOfGpa(calcGpa(chemNum)));
    const bioPoint = Number(numOfGpa(calcGpa(bioNum)));
    const ictPoint = Number(numOfGpa(calcGpa(ictNum)));

    const totalPoint =
      banglaPoint +
      engPoint +
      mathPoint +
      phyPoint +
      chemPoint +
      bioPoint +
      ictPoint;

    const totalGpa = totalPoint / 7;

    const totalNumber =
      banglaNum + engNum + mathNum + phyNum + chemNum + bioNum + ictNum;

    let ultimateResult;
    if (
      banglaNum < 33 ||
      engNum < 33 ||
      mathNum < 33 ||
      phyNum < 33 ||
      chemNum < 33 ||
      bioNum < 33 ||
      ictNum < 33
    ) {
      ultimateResult = "Fail😭";
    } else {
      ultimateResult = "Pass👏🏼";
    }
    const result = document.querySelector(".result");
    result.textContent = `You Got (${banglaRes}) in Bangla,You Got (${engRes}) In Englist,You Got (${mathRes}) In Math,You Got (${phyRes}) In Physics,You Got (${chemRes}) In Chemistry,You Got (${bioRes}) In Biology,You Got (${ictRes}) In Ict`;

    document.querySelector(
      ".totalGpa"
    ).textContent = `Your Total Gpa is:(${totalGpa.toFixed(
      2
    )}) And Total Number Is (${totalNumber}) Your Result Is ${ultimateResult}`;

    document.querySelector(".show-result").style.display = "block";

    document.getElementById("ban").value = "";
    document.getElementById("eng").value = "";
    document.getElementById("math").value = "";
    document.getElementById("phy").value = "";
    document.getElementById("chem").value = "";
    document.getElementById("bio").value = "";
    document.getElementById("ict").value = "";
  }
});
