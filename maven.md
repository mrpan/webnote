#maven
今天使用了eclipse创建maven项目
之前也用过，突然很久没用后，一用出现的一些问题以及解决方法
pom.xml中的依赖
1、下载依赖失败
使用eclipse下载依赖不报错，但是一直下载不成功
解决方法：进入本地.m2仓库对应目录，手动删除对应版本的文件夹内容，在eclipse update maven project, 其中将force update or snapshots/releases 勾上，eclipse重新下载。
2、出现如下错误：Archive for required library: '/Users/panxiaoming/.m2/repository/org/apache/derby/derby/10.11.1.1/derby-10.11.1.1.jar' in project 'gs-tool-judge' cannot be read or is not a valid ZIP file 
原因：暂时没有找出出现该问题的具体原因，怀疑原有jar下载不完整导致。
解决方法：删除原有版本下的jar包以及其它内容，重新下载
3、常见jar包在maven中心库搜索
http://search.maven.org/
4、geotools repository  
<repositories>
        <repository>
            <id>maven2-repository.dev.java.net</id>
            <name>Java.net repository</name>
            <url>http://download.java.net/maven/2</url>
        </repository>
        <repository>
            <id>osgeo</id>
            <name>Open Source Geospatial Foundation Repository</name>
            <url>http://download.osgeo.org/webdav/geotools/</url>
        </repository>
        <repository>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
          <id>boundless</id>
          <name>Boundless Maven Repository</name>
          <url>http://repo.boundlessgeo.com/main</url>
        </repository>
    </repositories>
