function buildRequiredTrialsTable(probabilityPerTrial, targetWinnings, costPerTrial, costUnit, targetProbPercentList) {
  const targetProbPercentListLength = targetProbPercentList.length;
  let targetProbList = []; // target Probs to be displayed
  for (let k = 0; k < targetProbPercentListLength; k++) {
    targetProbList.push(targetProbPercentList[k] / 100); // percent to actual number
  }
  let requiredTrials = [];

  // binary search
  const MAX_TRIALS = 2 ** 31 - 1;
  for (const targetProb of targetProbList) {
    let trialsLowerBound = 1;
    let trialsUpperBound = MAX_TRIALS;
    do {
      const testTrials = Math.floor((trialsLowerBound + trialsUpperBound) / 2);
      if (testTrials === trialsUpperBound) {
        // select upper bound
        requiredTrials.push(trialsUpperBound);
        break;
      }

      const testProb = binocdf_upper(targetWinnings - 1, testTrials, probabilityPerTrial);
      if (targetProb - testProb >= 0) {
        // correction to upper side
        trialsLowerBound = testTrials + 1;
      } else {
        // correction to lower side
        trialsUpperBound = testTrials - 1;
      }
    } while (trialsLowerBound <= trialsUpperBound);
  }

  //build table
  let tb = probTableTemplate("달성 가능성", "요구 뽑기 수", "예상 비용");

  for (let k = 0; k < requiredTrials.length; k++) {
    var tr = tb.insertRow();
    let targetProb = targetProbPercentList[k];
    if (targetProb == 50) {
      tr.className = "table-info";
    } else if (targetProb == 80) {
      tr.className = "table-success";
    } else if (targetProb == 90) {
      tr.className = "table-warning";
    } else if (targetProb == 95) {
      tr.className = "table-primary";
    } else if (targetProb == 99) {
      tr.className = "table-danger";
    }
    let requiredTrial = requiredTrials[k];
    let expectedCost = requiredTrial * costPerTrial;
    setRowContentRequiredTrials(tr, targetProb + "%", requiredTrial + "회", expectedCost.toString() + costUnit);
  }
  return tb;
}
