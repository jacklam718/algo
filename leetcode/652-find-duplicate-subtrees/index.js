/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const hashmap = new Map();
  const result = [];

  var traverse = function (node) {
    if (node === null) return;
    const subtree = `${node.val},${traverse(node.left)},${traverse(
      node.right
    )}`;
    const count = hashmap.get(subtree) || 0;
    if (count === 1) result.push(node);
    hashmap.set(subtree, count + 1);
    return subtree;
  };

  traverse(root, hashmap);
  return result;
};
