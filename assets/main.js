jQuery(document).ready(function(){

    //selector in jquery
    // let user_name = jQuery('#username');
    // user_name.hide();

    //select with tag and class 
    // let username = jQuery('label.input');
    // username.hide();


    //با کلیک برروی قسمت مورد نظر الرت زیر اجرا میگردد
    // jQuery('input.submit').click(function(){
    //     alert('آیا اطلاعات شما درست میباشد؟');
    // });

    //با انتقال ماوس بر نقطه مدنظر الرت زیر اجرا میشود

    // jQuery('input.password').mouseenter(function(){
    //     alert('دقت داشته باشید فقط یکبار امکان تایید رمز میباشد بار دوم اکانت شما بن میشود.')
    // });


    //بی اثر کردن دکمه submit برای ارسال فرم 
    // jQuery('input.submit').click(function(event){

    //     event.preventDefault();
    //     //jQuery('input.submit').hide(); // same codes => $(this).hide();
    //     $(this).hide();
        
    // });

    // jQuery('.submit').click(function(e){
    //     e.preventDefault();
    //     jQuery('.loading').fadeIn(2000);
    // })


    jQuery('.SocialMedia').click(function(e){
        e.preventDefault();
        jQuery('.icons').slideToggle();
    });


    jQuery('.submit').click(function(e){
        e.preventDefault();
        // let title = $('#username').val();
        // let pass = $('#password').val();
        // console.log(title);
        // console.log(pass);
        //$('.alert').html('<strong> متن آزمایشی! </strong>');
        //$('#username').val('girgargor');
        let username = $('#username').val();
        let pass = $('#password').val();
      



        
    });

});


jQuery(document).ready(function(){
    jQuery('#switch').change(function(){
        // if(this.checked){
        //     jQuery('body').toggleClass('night');
        //     jQuery('#login_form').css({
        //     "background":"#343434",
        //     "color":"#fff"
        // })
        // }else{
        //     jQuery('body').removeClass('night');
        // }

        //same codes
        // jQuery('body').toggleClass('night');
        // jQuery('#login_form').css({
        //     "background":"#343434",
        //     "color":"#fff"
        // })

        jQuery('body').toggleClass('night');
        jQuery('#login_form').toggleClass('nightdetails');
    });
});


jQuery(document).ready(function(){
    jQuery('#switch').change(function(){
        // localStorage.setItem('test','farshid');
        // let x = localStorage.getItem('test');
        // console.log(x);
        // localStorage.clear();

        let data = {
            "night":"night",
            "nightdetails":"nightdetails"
        }
       
        // if(this.checked){
        //     localStorage.setItem("night_mode",JSON.stringify(data));
        //     jQuery('body').addClass("night");
        //     jQuery('#login_form').addClass("nightdetails");
        // }else{
        //     localStorage.clear("night_mode");
        // }
        console.log(JSON.parse());

    });
})