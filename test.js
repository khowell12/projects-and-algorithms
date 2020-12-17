$(document).ready(function() {


    $( ".accordion" ).accordion(
            {
             active: false,
             collapsible: true,
                     }
        );
    });
    function calculateProjectileTHeight(vi, theta){
        var ans = (vi.value * Math.sin(Math.PI*(theta.value)/180)/9.81);
        console.log(ans);
        alert(ans.toFixed(3) + " seconds");
        return ans;
    }
calculateProjectileTHeight(10,10);