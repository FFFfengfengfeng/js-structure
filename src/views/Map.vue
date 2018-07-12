<template>
    <div class="container">
        <h2>第9章: 图</h2>
        <h3>图的相关术语</h3>
        <p>图是一种非顺序的数据结构,任何二次元关系都可以用图来表示</p>
        <p>一个图G=(V, E)有以下元素组成</p>
        <p>V:一组顶点</p>
        <p>E:一组边,连接V的顶点</p>
        <p>图的术语</p>
        <p>1.由一条边连接一起的顶点,称为相邻顶点</p>
        <p>2.一个顶点的度是这个顶点的相邻顶点数</p>
        <p>3.路径是顶点的一个连续序列,并且这些顶点两两是相邻顶点</p>
        <p>4.简单路径即没有重复顶点的路径,环是指路径形成一个闭合回路,并且环也是一个简单路径</p>
        <p>5.如果图中不存在环,则称该图无环,如果图中每两个顶点间都存在路径,则图是连通的</p>
        <h4>有向图和无向图</h4>
        <p>图可以是无向的()或是有向的</p>
        <p>如果图中每个顶点在双向上都存在路径,则图是强连通的</p>
        <p>图还可以是为加权的或加权的</p>
        <h3>图的表示</h3>
        <h4>领接矩阵</h4>
        <p>通过矩阵来表示图的数值</p>
        <h4>邻接表</h4>
        <p>可以使用一种邻接表的动态数据结构来表示图,邻接表由图中每个顶点的相邻顶点列表所组成</p>
        <p>当要找出两个顶点是否相邻的时候,使用邻接矩阵表示会比较快</p>
        <h4>关联矩阵</h4>
        <p>关联矩阵中,矩阵的行表示顶点,列表示边,关联矩阵通常用于边的数量比顶点多的情况下,以节省空间和内存</p>
        <h3>创建Graph类</h3>
        <pre>
            <code v-highlight>
                function Graph() {
                    this.vertices = [];
                    this.adjList = new Dictionary();
                }
            </code>
        </pre>
        <h4>实现addVertex方法向图中添加顶点</h4>
        <pre>
            <code v-highlight>
                Graph.prototype.addVertex = function(v) {
                    this.vertices.push(v);
                    this.adjList.set(v, []);
                }
            </code>
        </pre>
        <p>addVertex接受顶点v作为参数,添加到顶点列表中,讲顶点v作为键对应字典值为一个空数组</p>
        <h4>实现addEdge方法</h4>
        <pre>
            <code v-highlight>
                Graph.prototype.addEdge = function(v, w) {
                    this.adjList.get(v).push(w);
                    this.adjList.get(w).push(v);
                }
            </code>
        </pre>
        <p>这个方法接受两个顶点作为参数,将w加入到v的邻接表中,添加一条自顶点v到顶点w的边</p>
        <h3>图的遍历</h3>
        <p>和数结构类似,我们可以访问图的所有节点,有两种算法可以对图进行遍历:广度优先搜索(BFS)和深度优先搜索(DFS),图的遍历可以用来寻找特定的顶点或寻找两个顶点之间的路径,检查图是否连通,检查图是否含有环</p>
        <h4>广度优先搜索</h4>
        <p>广度优先搜索会从指定的第一个顶点开始遍历图,先访问其所有的相邻点,就像一次访问图的一层</p>
    </div>
</template>

<script>
export default {
    name: 'Map',
    data() {
        return {

        };
    }
}
</script>

<style scoped>

</style>