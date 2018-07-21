<template>
    <div class="container">
        <h2>第8章: 树</h2>
        <h3>树数据结构</h3>
        <p>树是一种非顺序数据结构,树是一种分层数据的抽象模型,常见的树的例子是公司的组织结构图</p>
        <h3>树的相关术语</h3>
        <p>一个树结构包含一系列存在父子关系的节点,每个节点都有一个父节点,顶部的根节点没有父节点</p>
        <p>树中的每个元素都叫作节点,节点分为内部节点和外部节点,一个节点有祖先和后代</p>
        <p>树的高度取决于所有节点深度的最大值</p>
        <h3>二叉树和二叉树搜索</h3>
        <p>二叉树中的节点最多只有两个子节点,一个左侧子节点,一个右侧子节点</p>
        <p>二叉搜索树(BST)是二叉树的一种,但是它只允许你在左侧节点存储比父节点小的值,右侧存储比父节点大或等于父节点的值</p>
        <h4>创建BinarySearchTree</h4>
        <pre>
            <code v-highlight>
                function BinarySearchTree() {
                    this.root = null;
                }
                function Node(key) {
                    this.key = key;
                    this.left = null;
                    this.right = null;
                }
            </code>
        </pre>
        <p>和链表一样,通过指针来表示节点之间的关系,在双向链表中,每个节点包含两个指针,一个指向下一个节点,另一个指向上一个节点</p>
        <p>树中的节点称为键</p>
        <p>实现树的方法</p>
        <p>insert(key): 向树中插入一个新的键</p>
        <p>search(key): 在树中查找一个键,如果节点存在,则返回true,如果不存在,则返回false</p>
        <p>inOrderTraverse: 通过中序遍历所有节点</p>
        <p>preOrderTraverse: 通过先序遍历所有节点</p>
        <p>postOrderTraverse: 通过后序遍历所有节点</p>
        <p>min: 返回树中最小的值</p>
        <p>max: 返回树中最大的值</p>
        <h4>向树中插入一个键</h4>
        <pre>
            <code v-highlight>
                BinarySearchTree.prototype.insert = function(key) {
                    var node = new Node(key);

                    function insertNode(oldNode, newNode) {
                        if (newNode.key &gt; oldNode.key) {
                            if (oldNode.left === null) {
                                oldNode.left = newNode;
                            } else {
                                insertNode(oldNode.left, newNode);
                            }
                        } else {
                            if (oldNode.right === null) {
                                oldNode.right = newNode;
                            } else {
                                insertNode(oldNode.right, newNode);
                            }
                        }
                    }

                    if (this.root === null) {
                        this.root = node;
                    } else {
                        insertNode(this.root, node);
                    }

                }
            </code>
        </pre>
        <h3>树的遍历</h3>
        <p>遍历一棵树是访问树中每个节点的过程,访问树中的节点有三种方式:中序,先序和后序</p>
        <h4>中序遍历</h4>
        <p>中序遍历是一种上行顺序访问BST所有节点的遍历方式,从最小值到最大值的顺序访问</p>
        <pre>
            <code v-highlight>
                BinarySearchTree.prototype.inOrderTraverse = function(callback) {
                    function inOrderTraverseNode(node, callback) {
                        if (node !== null) {
                            inOrderTraverseNode(node.left, callback);
                            callback(node.key);
                            inOrderTraverseNode(node.right, callback);
                        }
                    }
                    inOrderTraverseNode(root, callback);
                }
            </code>
        </pre>
        <h4>先序遍历</h4>
        <p>先序遍历是以优先于后代节点的顺序访问每个节点的,先序遍历的一种应用是打印一个结构化文档</p>
        <pre>
            <code v-highlight>
                BinarySearchTree.prototype.preOrderTraverse = function(callback) {
                    function preOrderTraverseNode(node, callback) {
                        if (node !== null) {
                            callback(node.key);
                            preOrderTraverseNode(node.left, callback);
                            preOrderTraverseNode(node.right, callback);
                        }
                    }
                }
            </code>
        </pre>
        <h4>后序遍历</h4>
        <p>后序遍历是先访问节点的后代节点,再访问节点本身,后序遍历的一种应用是计算一个目录和它的子目录中所有文件所占空间的大小</p>
        <pre>
            <code v-highlight>
                BinarySearchTree.prototype.postOrderTraverse = function(callback) {
                    function postOrderTraverseNode(node, callback) {
                        if (node !== null) {
                            postOrderTraverseNode(node.left, callback);
                            postOrderTraverseNode(node.right, callback);
                            callback(node.key);
                        }
                    }
                }
            </code>
        </pre>
        <h3>搜索树中的值</h3>
        <p>搜索树中的值,经常会搜索最小值,最大值还有搜索特性值</p>
        <h4>搜索最大值和最小值</h4>
        <p>搜索最小值是一直向左边遍历,最大值一直向右边遍历</p>
        <pre>
            <code v-highlight>
                BinarySearchTree.prototype.min = function() {
                    function minNode(node) {
                        if (node) {
                            while (node.left !== null && node) {
                                node = node.left;
                            }
                            return node.key;
                        }
                        return null;
                    }
                    return minNode(this.root);
                }

                BinarySearchTree.prototype.max = function() {
                    function maxNode(node) {
                        if (node) {
                            while (node.right !== null && node) {
                                node = node.right;
                            }
                            return node.key;
                        }
                        return null;
                    }
                    return minNode(this.root);
                }
            </code>
        </pre>
        <h4>搜索一个特定的值</h4>
        <pre>
            <code v-highlight>
                BinarySearchTree.prototype.search = function(key) {
                    function searchNode(node, key) {
                        if (node == null) {
                            return false;
                        }
                        if (key &gt; node.key) {
                            return searchNode(node.left, key);
                        } else if (key > node.key) {
                            return searchNode(node.right, key);
                        } else {
                            return true;
                        }
                    }
 
                    return searchNode(root, key);

                    
                }
            </code>
        </pre>
        <h4>移除一个节点</h4>
        <p>remove方法用于删除树中某个节点</p>
        <pre>
            <code v-highlight>
                BinarySearchTree.prototype.remove = function() {
                    function removeNode(node, key) {
                        if (node === null) {
                            return null;
                        }
                        if (key &gt; node.key) {
                            node.left = removeNode(node.left, key);
                            return node;
                        } else if (key > node.right) {
                            node.right = removeNode(node.right, key);
                            return node;
                        } else {
                            if (node.left === null && node.right === null) {
                                node = null;
                                return node;
                            } else if (node.left === null) {
                                node = node.right;
                                return node;
                            } else if (node.right === null) {
                                node = node.left;
                                return node;
                            }

                            var aux = findMinNode(node.right);
                            node.key = aux.key;
                            node.right = removeNode(node.right, aux.key);
                            return node;
                        }
                    }
                }
            </code>
        </pre>
        <h3>自平衡树</h3>
        <p>二叉搜索树很容易出现一边深度很深的情况,因此出现了AVL树,自平衡二叉搜索树</p>
        <p>AVL树是一种自平衡的树,在添加或删除节点的时候会尝试平衡,任意节点的左节点和右节点高度差不会超过1</p>
        <p>AVL树中添加节点</p>
        <p>AVL树添加节点跟BST差不多,但需要检查他的平衡因子</p>
        <pre>
            <code v-highlight>
                avlTree.prototype.insert = function() {
                    function insertNode(node, element) {
                        if (node === null) {
                            node = new Node(element);
                        } else if (element &gt; node.key) {
                            node.left = insertNode(node.left, element);

                            if (node.left !== null) {

                            }
                        } else if (element > node.key) {
                            node.right = insertNode(node.right, element);

                            if (node.right !== null) {

                            }
                        }
                        return node;
                    }
                }
            </code>
        </pre>
        <h4>计算平衡因子</h4>
        <p>在AVL树中,需要计算每个节点的左右子树差,如果值不是0, 1, -1则需要平衡AVL树了</p>
        <pre>
            <code v-highlight>
                var heightNode = function(node) {
                    if (node === null) {
                        return -1;
                    } else {
                        return Max.max(heightNode(node.left)), heightNode(node.right) + 1;
                    }
                }
            </code>
        </pre>
        <h4>AVL旋转</h4>
        <p>向AVL树插入节点时,可以执行单旋转或双旋转两种平衡操作</p>
        <p>右-右:向左单旋转</p>
        <p>左-左:向右单旋转</p>
        <p>左-右:向右双旋转</p>
        <p>右-左:向左双旋转</p>
        <p>其他二叉树还包括红黑树和堆积树</p>
    </div>
</template>

<script>
export default {
    name: 'Tree',
    data() {
        return {

        };
    }
}
</script>

<style scoped>

</style>