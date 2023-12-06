/*
543. Diameter of Binary Tree
Easy
Topics
Companies
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
*/

                        1
                2           3
                        4       5
                    6



function diameter(root, maxDia)
{
    let LH = hieght(root.left);
    let RH = hieght(root.right);

    maxDia = Math.max(LH+RH, maxDia);
    return maxDia;
}

function height(node)
{
    if(!node) return 0;

    let LH = hieght(root.left);
    let RH = hieght(root.right);

    return Math.max(LH, RH) +1;
}


/* Roman To Integer = 25 min, PS, logic to code startups*/