import "babel-polyfill";
import Utils from './js/utils/utils.js';
// import reverseList from './js/linkList/reverseLink.js';
// import reverseWords from './js/others/reverseWords.js';
// import pickBinaryStr from './js/binary/binaryString.js';
// import getPhoneNumComb from './js/array/phoneNumbers.js';
// import getSubSets from './js/array/subsets.js';
// import cardgroup from './js/array/card914.js';
// import plant from './js/array/flowers605.js';
// import findPoisonedDuration from './js/array/teemo495.js';
// import asteroidCollision from './js/array/asteroid735.js';
// import merge from './js/array/merge54.js';
// import insert from './js/array/insert57.js';
// import deckRevealedIncreasing from './js/array/deck950.js';
// import firstMissingPositive from './js/array/firstMissing41.js';
// import missingNumber from './js/array/missingNo268.js';
// import isOneBitCharacter from './js/array/isOneBit717.js';
// import singleNumber from './js/array/singleNo136.js';
// import threeSum from './js/array/threesum15.js';
// import combinationSum from './js/array/combinationSum39.js';
// import permute from './js/backtrack/permute46.js';
// import permute from './js/backtrack/solveNQueens51.js';
// import generateParenthesis from './js/backtrack/22generateParenthesis.js';
// import letterCombinations from './js/backtrack/17letterCombinations.js';
// import isValidSudoku from './js/hash/36isValidSudoku.js';
// import exist from './js/backtrack/79exist.js';
// import combinationSum2 from './js/backtrack/40combinationSum2.js';
// import subsetsWithDup from './js/backtrack/90subsetsWithDup.js';
// import permuteUnique from './js/backtrack/47permuteUnique.js';
// import totalNQueens from './js/backtrack/52totalNQueens.js';
// import combinationSum3 from './js/backtrack/216combinationSum3.js';
// import getPermutation from './js/backtrack/60getPermutation.js';
// import grayCode from './js/backtrack/89grayCode.js';
// import combine from './js/backtrack/77combine.js';
// import restoreIpAddresses from './js/backtrack/93restoreIpAddresses.js';
// import findLadders from './js/backtrack/126findLadders.js';

import bsTreeNode from './js/tree/bsTreeNode.js';
import linktreeNode from './js/tree/linkTreeNode.js';
// import buildTree from './js/tree/105buildTree.js';
import arrToTree from './js/tree/tool.js';
// import levelOrder from './js/tree/102levelOrder.js';
// import inorderTraversal from './js/tree/94inorderTraversal.js';
// import preorderTraversal from './js/tree/144preorderTraversal.js';
// import numTrees from './js/tree/96numTrees.js';
// import isValidBST from './js/tree/98isValidBST.js';
// import recoverTree from './js/tree/99recoverTree.js';
// import isSameTree from './js/tree/100isSameTree.js';
// import isSymmetric from './js/tree/101isSymmetric.js';
// import zigzagLevelOrder from './js/tree/103zigzagLevelOrder.js';
// import maxDepth from './js/tree/104maxDepth.js';
// import postorderTraversal from './js/tree/145postorderTraversal.js';
// import buildTree from './js/tree/106buildTree.js';
// import levelOrderBottom from './js/tree/107levelOrderBottom.js';
// import sortedArrayToBST from './js/tree/108sortedArrayToBST.js';
// import isBalanced from './js/tree/110isBalanced.js';
// import minDepth from './js/tree/111minDepth.js';
// import hasPathSum from './js/tree/112hasPathSum.js';
// import generateTrees from './js/tree/95generateTrees.js';
// import pathSum from './js/tree/113pathSum.js';
// import sumNumbers from './js/tree/129sumNumbers.js';
// import maxPathSum from './js/tree/124maxPathSum.js';
// import connect from './js/tree/116connect.js';
// import connect from './js/tree/117connect.js';
// import flatten from './js/tree/114flatten.js';
// import rightSideView from './js/tree/199rightSideView.js';
// import numIslands from './js/dfs/200numIslands.js';
// import binaryTreePaths from './js/tree/257binaryTreePaths.js';

// import findCircleNum from './js/DSU/547findCircleNum.js';
// import longestConsecutive from './js/DSU/128longestConsecutive.js';
// import findRedundantConnection from './js/DSU/684findRedundantConnection.js';

import ListNode from './js/linkList/ListNode.js';
import linkTool from './js/linkList/linkTool.js';
// import sortedListToBST from './js/linkList/109sortedListToBST.js';

import graghNode from './js/tree/graghNode.js';
import graphTool from './js/tree/graphTool.js';
// import ladderLength from './js/bfs/127ladderLength.js';
// import solve from './js/bfs/130solve.js';
// import cloneGraph from './js/bfs/133cloneGraph.js';
// import calcEquation from './js/dfs/399calcEquation.js';
// import canFinish from './js/dfs/207canFinish.js';
// import findOrder from './js/bfs/210findOrder.js';
// import canReach from './js/dfs/1306canReach.js';
// import findJudge from './js/bfs/997findJudge.js';
// import gardenNoAdj from './js/bfs/1042gardenNoAdj.js';
// import findMinHeightTrees from './js/bfs/310findMinHeightTrees.js';
// import canVisitAllRooms from './js/dfs/841canVisitAllRooms.js';
// import findTargetSumWays from './js/dfs/494findTargetSumWays.js';

// import canPartition from './js/DP/416canPartition.js';
// import canPartitionKSubsets from './js/DP/698canPartitionKSubsets.js';
// import coinChange from './js/DP/322coinChange.js';
// import change from './js/DP/518change.js';
// import wordBreak from './js/DP/139wordBreak.js';
// import longestPalindrome from './js/DP/5longestPalindrome.js';
// import maxProfit from './js/DP/121maxProfit.js';
// import maxSubArray from './js/DP/53maxSubArray.js';
// import maxProduct from './js/DP/152maxProduct.js';
// import climbStairs from './js/DP/70climbStairs.js';
// import rob from './js/DP/198rob.js';
// import uniquePaths from './js/DP/62uniquePaths.js';
// import minPathSum from './js/DP/64minPathSum.js';
// import uniquePathsWithObstacles from './js/DP/63uniquePathsWithObstacles.js';
// import minimumTotal from './js/DP/120minimumTotal.js';
// import longestValidParentheses from './js/DP/32longestValidParentheses.js';
// import numDecodings from './js/DP/91numDecodings.js';
// import isSubsequence from './js/DP/392isSubsequence.js';
// import minCostClimbingStairs from './js/DP/746minCostClimbingStairs.js';
// import countBits from './js/DP/338countBits.js';
// import numSquares from './js/DP/279numSquares.js';
// import rob from './js/DP/213rob.js';
// import lengthOfLIS from './js/DP/300lengthOfLIS.js';
import divisorGame from './js/DP/1025divisorGame.js';

// import fraction from './js/LCP/2fraction.js';

// import solveSudoku from './js/backtrack/37solveSudoku.js';

// import dfssearch from './js/dfs/dfs.js';
// import bfssearch from './js/bfs/bfs.js';

 let utils = new Utils();



