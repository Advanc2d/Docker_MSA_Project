function update() {
	var proNo = $('#proNo').val();
	var proName = $('#proName').val();
	var proLimit = parseFloat($('#proLimit').val().replace(/,/g,''));
	var detail = $('#detail').val();
	var need = $('#need').val();
	var rate = parseFloat($('#rate').val());
	var term = parseInt($('#term').val());

	var arr = {
		"proNo": proNo,
		"proName": proName,
		"detail": detail,
		"need": need,
		"proLimit": proLimit,
		"rate": rate,
		"term": term
	};

	console.log(arr);

	$.ajax({
		anyne : true,
		type: 'POST',
		url: '/product/modify',
		data: JSON.stringify(arr),
		contentType: 'application/json; charset=utf-8;',
		dataType: "text",		
		success: function(data) {
			alert("상품이 수정되었습니다.");
			location.href = "/product/list";
		},
		error: function(request, status, error) {
			alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
		}
	});
}

function register() {
	var proName = $('#proName').val();
	var proLimit = parseFloat($('#proLimit').val().replace(/,/g,''));
	var detail = $('#detail').val();
	var need = $('#need').val();
	var rate = parseFloat($('#rate').val());
	var term = parseInt($('#term').val());

	var arr = {
		"proName": proName,
		"detail": detail,
		"need": need,
		"proLimit": proLimit,
		"rate": rate,
		"term": term
	};

	console.log(arr);
	$.ajax({
		type: 'POST',
		url: '/product/register',
		data: JSON.stringify(arr),
		contentType: 'application/json; charset=utf-8;',
		dataType: 'text',
		success: function(data) {
			alert("상품이 등록되었습니다. 메인화면으로 돌아갑니다.");
			location.href = "/product/list";
		},
		error: function(request, status, error) {
			alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
		}
	});

}

function back() {
	location.href="/product/list";
}