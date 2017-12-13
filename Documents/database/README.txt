	+ login : thể hiện qua 2 thuộc tính là userName và pwd
	+ registerd client: thể hiện qua attribute [isRegistered]
	+ bid/post/view/payment house: cần phải có collection [house] bao gồm: giá cả, địa chỉ, diện tích
	+ check balance/ transact currency/payment của client: client-side sẽ gọi API được cung cấp từ phía ethereum,param: chuỗi địa chỉ tài khoản [ethereumAccountAddress]
	+ payment: khi client đã hết thời gian bid , lưu xuống database [currentprice] của [house]. xác định chủ sở hữu bằng cách get record bằng houseId trong [bidState]