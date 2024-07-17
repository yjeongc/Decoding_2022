<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <%request.setCharacterEncoding("utf-8"); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Inculde1.jsp</title>
</head>
<body>
안녕하세요.
<br>
<jsp:include page="Image.jsp" flush="true">
<jsp:param name="name" value="펭수"/>
<jsp:param name="imgName" value="12121212.jpg"/>
</jsp:include>
</body>
</html>