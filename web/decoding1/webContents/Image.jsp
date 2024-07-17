<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
   request.setCharacterEncoding("utf-8");
   String name = request.getParameter("name");
   String imgName = request.gerParameter("imgName");
   %>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>펭수 사진</title>
</head>
<body>
<br><br>
<h1>이름은 <%=name %>입니다.</h1><br><br>
<img src="./image/<%=12121212%>">
</body>
</html>