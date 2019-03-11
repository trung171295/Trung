jQuery(document).ready(
    function ()
    {
        menuMobile ();
    });
    
    function menuMobile ()
    {
        $("#pageslide").click(function(){
            $("#wrapper-menu-mobile").css({left:0, opacity:0});
            $("#wrapper-menu-mobile").animate({opacity:1},200);
            $("#wrapper-menu-mobile .wrapper").animate({ right:"0"},500);
            jQuery(document.body).css('overflow', 'hidden');
            return false;
        });
    
        $("#bt-fechar-menu").click(function(){
            closeMenuMobile ();
            return false;
        });
    
        $(".block-menu-mobile").mousedown(function(){
            closeMenuMobile ();
        });
    }
    
    function closeMenuMobile (){
        $("#wrapper-menu-mobile .wrapper").animate({ right:"-100%"},300,function(){
            $("#wrapper-menu-mobile").animate({opacity:0},200,function(){
                $("#wrapper-menu-mobile").css({left:"100%", opacity:1});
                jQuery(document.body).css('overflow', 'auto');
            });
        });
    }
    jQuery(document).ready(
        function ()
        {
            menuMobile ();
        });
        
        function menuMobile ()
        {
            $("#pageslide").click(function(){
                $("#wrapper-menu-mobile").css({left:0, opacity:0});
                $("#wrapper-menu-mobile").animate({opacity:1},200);
                $("#wrapper-menu-mobile .wrapper").animate({ right:"0"},500);
                jQuery(document.body).css('overflow', 'hidden');
                return false;
            });
        
            $("#bt-fechar-menu").click(function(){
                closeMenuMobile ();
                return false;
            });
        
            $(".block-menu-mobile").mousedown(function(){
                closeMenuMobile ();
            });
        }
        
        function closeMenuMobile (){
            $("#wrapper-menu-mobile .wrapper").animate({ right:"-100%"},300,function(){
                $("#wrapper-menu-mobile").animate({opacity:0},200,function(){
                    $("#wrapper-menu-mobile").css({left:"100%", opacity:1});
                    jQuery(document.body).css('overflow', 'auto');
                });
            });
        }
        $('.collapse.in').prev('.panel-heading').addClass('active');
        $('#accordion, #bs-collapse')
            .on('show.bs.collapse', function (a) {
                $(a.target).prev('.panel-heading').addClass('active');
            })
            .on('hide.bs.collapse', function (a) {
                $(a.target).prev('.panel-heading').removeClass('active');
            });
            jQuery(document).ready(function () {
                var accordionsMenu = $('.cd-accordion-menu');
                if (accordionsMenu.length > 0) {
                    accordionsMenu.each(function () {
                        var accordion = $(this);
                        //detect change in the input[type="checkbox"] value
                        accordion.on('change', 'input[type="checkbox"]', function () {
                            var checkbox = $(this);
                            (checkbox.prop('checked')) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
                        });
                    });
                }
            });
            