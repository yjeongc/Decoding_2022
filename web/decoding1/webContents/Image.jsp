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
<title>��� ����</title>
</head>
<body>
<br><br>
<h1>�̸��� <%=name %>�Դϴ�.</h1><br><br>
<img src="./image/<%=12121212%>">
</body>
</html>