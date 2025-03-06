document.addEventListener("DOMContentLoaded", function () {
    if (window.matchMedia("(max-width:46.1875em)").matches) {
        console.log("Chạy JavaScript trên màn hình điện thoại!");
        // Thêm code bạn muốn chạy ở đây

        const h_mobile = document.querySelector('.header__Mobile__menu');
        const h_Mnlist = document.querySelector('.header__menu__nav');

        const l1 = document.querySelector('.line_1');
        const l2 = document.querySelector('.line_2');
        const l3 = document.querySelector('.line_3');

        h_mobile.addEventListener('mouseenter', function () {
            h_Mnlist.style.display = 'block'; // Hiển thị b khi hover vào a
            l1.classList.add('hover'); // Giữ trạng thái hover của a khi hover vào b
            l2.classList.add('hover');
            l3.classList.add('hover')
        });

        h_Mnlist.addEventListener('mouseenter', function () {
            l1.classList.add('hover'); // Giữ trạng thái hover của a khi hover vào b
            l2.classList.add('hover');
            l3.classList.add('hover')

        });

        h_mobile.addEventListener('mouseleave', function () {
            setTimeout(() => {
                if (!h_Mnlist.matches(':hover')) { // Chỉ ẩn nếu b không được hover
                    h_Mnlist.style.display = 'none';
                    l1.classList.remove('hover'); // Xóa trạng thái hover của a khi rời khỏi b
                    l2.classList.remove('hover');
                    l3.classList.remove('hover');
                }
            }, 100); // Tránh lỗi mất hover ngay lập tức khi di chuột từ a -> b
        });

        h_Mnlist.addEventListener('mouseleave', function () {
            setTimeout(() => {
                if (!h_mobile.matches(':hover')) { // Chỉ ẩn nếu a không được hover
                    h_Mnlist.style.display = 'none';
                    l1.classList.remove('hover');
                    l2.classList.remove('hover');
                    l3.classList.remove('hover');
                }
            }, 100);
        });
    }
});


