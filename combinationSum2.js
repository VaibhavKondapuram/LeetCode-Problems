var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a - b);
    let paths = [];

    find (target, [], 0, candidates, paths);
    
    return paths;
};

// Time O(2^n) | Space O(n)
function find (target, currPath, index, candidates, paths) {
  if (target === 0) {
    paths.push(currPath.slice());
    return;
  } else {
    while (index < candidates.length && target - candidates[index] >= 0) {
      find(target - candidates[index], [...currPath, candidates[index]], index + 1, candidates, paths);
      index++;
      while (candidates[index - 1] === candidates[index]) index++; 
    }
  }
};