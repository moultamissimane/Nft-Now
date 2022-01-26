let sidebar = `

<div class="flex justify-center items-center">
<img style="width:60px; height:60px; margin-top: 1rem; " src="./public/assets/images/NFTlogo.png" alt="NFT logo">
</div>
<div class="flex justify-center">
<h2 style="font-size:medium; margin-top:1rem; color:white;">NFT Now</h2>
</div>
<!-- icons -->
<div style=" " class="items-center">

<!-- icon dashboard -->
<a href="/ShopNow2/Dashboard.php">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style="width:100%; margin-top: 4rem; fill:#000000;">
    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g fill="#fbbe54">
            <path d="M64.5,14.33333h-35.83333c-7.90483,0 -14.33333,6.4285 -14.33333,14.33333v50.16667c0,7.90483 6.4285,14.33333 14.33333,14.33333h35.83333c7.90483,0 14.33333,-6.4285 14.33333,-14.33333v-50.16667c0,-7.90483 -6.4285,-14.33333 -14.33333,-14.33333zM143.33333,14.33333h-35.83333c-7.90483,0 -14.33333,6.4285 -14.33333,14.33333v21.5c0,7.90483 6.4285,14.33333 14.33333,14.33333h35.83333c7.90483,0 14.33333,-6.4285 14.33333,-14.33333v-21.5c0,-7.90483 -6.4285,-14.33333 -14.33333,-14.33333zM64.5,107.5h-35.83333c-7.90483,0 -14.33333,6.4285 -14.33333,14.33333v21.5c0,7.90483 6.4285,14.33333 14.33333,14.33333h35.83333c7.90483,0 14.33333,-6.4285 14.33333,-14.33333v-21.5c0,-7.90483 -6.4285,-14.33333 -14.33333,-14.33333zM143.33333,78.83333h-35.83333c-7.90483,0 -14.33333,6.4285 -14.33333,14.33333v50.16667c0,7.90483 6.4285,14.33333 14.33333,14.33333h35.83333c7.90483,0 14.33333,-6.4285 14.33333,-14.33333v-50.16667c0,-7.90483 -6.4285,-14.33333 -14.33333,-14.33333z"></path>
        </g>
    </g>
</svg>
</a>

<!-- icon inventory -->
<a href="/ShopNow2/inventory.php">
<svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style="width:100%; margin-top: 4rem; fill:#000000;">
    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g fill="#ffffff">
            <path d="M163.3744,97.10594v60.54433c0,7.90157 -6.42845,14.33002 -14.33002,14.33002h-126.10417c-7.90157,0 -14.33002,-6.42845 -14.33002,-14.33002v-60.54433c0,-1.58275 1.28325,-2.866 2.866,-2.866c1.58275,0 2.866,1.28325 2.866,2.866v60.54433c0,4.74109 3.85692,8.59801 8.59801,8.59801h31.16779v-48.36382c0,-7.90157 6.42845,-14.33002 14.33002,-14.33002h35.10855c7.90157,0 14.33002,6.42845 14.33002,14.33002v36.8998c0,1.58275 -1.28325,2.866 -2.866,2.866c-1.58275,0 -2.866,-1.28325 -2.866,-2.866v-36.8998c0,-4.74073 -3.85728,-8.59801 -8.59801,-8.59801h-35.10855c-4.74073,0 -8.59801,3.85728 -8.59801,8.59801v48.36382h23.28628v-45.13956c0,-1.58275 1.28325,-2.866 2.866,-2.866c1.58275,0 2.866,1.28325 2.866,2.866v45.13956h60.18608c4.74073,0 8.59801,-3.85692 8.59801,-8.59801v-60.54433c0,-1.58275 1.28325,-2.866 2.866,-2.866c1.58275,0 2.866,1.28289 2.866,2.866zM18.64121,45.87612c0,1.58275 1.28325,2.866 2.866,2.866c155.93497,0 148.20357,0.27872 149.34281,-0.59505c0.59541,-0.4582 0.98483,-1.11917 1.09159,-1.87437c0.15978,-1.15178 1.18832,1.68055 -18.83466,-44.52624c-0.45462,-1.04824 -1.48746,-1.72641 -2.62992,-1.72641h-128.97018c-1.1421,0 -2.17566,0.67853 -2.62956,1.72641l-18.62903,42.99006c-0.32923,0.76021 -0.23645,-0.44638 -0.23645,18.92028c0.02078,13.03494 10.6275,23.63987 23.64453,23.63987c8.94874,0 16.75824,-5.01192 20.77244,-12.3797c8.96558,16.47594 32.58109,16.49421 41.56315,0.01111c8.97489,16.46985 32.58002,16.47343 41.55706,0c4.01133,7.36133 11.82155,12.3686 20.77853,12.3686c13.03781,0 23.64453,-10.60672 23.64453,-23.64453c0,-1.58275 -1.28325,-2.866 -2.866,-2.866c-1.58275,0 -2.866,1.28325 -2.866,2.866c0,9.87697 -8.03556,17.91252 -17.91252,17.91252c-9.87697,0 -17.91252,-8.03556 -17.91252,-17.91252c0,-1.58275 -1.28325,-2.866 -2.866,-2.866c-1.58275,0 -2.866,1.28325 -2.866,2.866c0,9.87697 -8.03556,17.91252 -17.91252,17.91252c-9.87697,0 -17.91252,-8.03556 -17.91252,-17.91252c0,-1.58275 -1.28325,-2.866 -2.866,-2.866c-1.58275,0 -2.866,1.28325 -2.866,2.866c0,9.87697 -8.03556,17.91252 -17.91252,17.91252c-9.65736,0 -17.91252,-7.76114 -17.91252,-18.05582c0,-1.58275 -1.28325,-2.866 -2.866,-2.866c-1.58275,0 -2.866,1.28325 -2.866,2.866c0,10.20763 -8.20358,18.05582 -17.91252,18.05582c-9.8612,0 -17.89712,-8.03771 -17.91252,-17.91252v-17.18205l17.64491,-40.71803h125.20711l16.14492,37.25805h-143.23356c-1.58311,0 -2.866,1.28289 -2.866,2.866z"></path>
        </g>
    </g>
</svg>
</a>

<!-- icon statistics -->
<a href="/ShopNow2/statistic.php">
<svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 226 226" style="width:100%; margin-top: 4rem; fill:#000000;">
    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
        <path d="M0,226v-226h226v226z" fill="none"></path>
        <g fill="#ffffff">
            <path d="M14.125,224.23438h197.75c3.00156,0 5.29688,-2.29531 5.29688,-5.29687c0,-3.00156 -2.29531,-5.29687 -5.29687,-5.29687h-12.35937v-188.92187c0,-3.00156 -2.29531,-5.29687 -5.29687,-5.29687h-35.3125c-3.00156,0 -5.29687,2.29531 -5.29687,5.29688v188.92188h-17.65625v-82.98437c0,-3.00156 -2.29531,-5.29687 -5.29687,-5.29687h-35.3125c-3.00156,0 -5.29687,2.29531 -5.29687,5.29688v82.98438h-17.65625v-100.64062c0,-3.00156 -2.29531,-5.29687 -5.29687,-5.29687h-35.3125c-3.00156,0 -5.29687,2.29531 -5.29687,5.29688v100.64063h-12.35937c-3.00156,0 -5.29687,2.29531 -5.29687,5.29688c0,3.00156 2.29531,5.29688 5.29688,5.29688zM164.20313,30.01563h24.71875v183.625h-24.71875zM100.64063,135.95313h24.71875v77.6875h-24.71875zM37.07813,118.29688h24.71875v95.34375h-24.71875z"></path>
        </g>
    </g>
</svg>
</a>

<!-- icon settings -->
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style="width:100%; margin-top: 20rem; fill:#000000;">
    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g fill="#ffffff">
            <path d="M69.27311,14.33333l-3.51335,18.08464c-5.90653,2.22752 -11.33046,5.34987 -16.08301,9.25228l-17.37077,-5.99089l-16.74089,28.97461l13.91341,12.09375c-0.53487,3.28395 -0.81185,6.32717 -0.81185,9.25228c0,2.9295 0.28528,5.96715 0.81185,9.25228v0.014l-13.91341,12.09375l16.74089,28.96061l17.35677,-5.97689c4.75299,3.90454 10.18919,7.00948 16.097,9.23828l3.51335,18.08464h33.45377l3.51335,-18.08464c5.91039,-2.22897 11.32824,-5.34628 16.083,-9.25227l17.37077,5.99088l16.72689,-28.96061l-13.89941,-12.10775c0.53486,-3.28395 0.81185,-6.32717 0.81185,-9.25228c0,-2.92072 -0.27857,-5.95999 -0.81185,-9.23828v-0.014l13.91341,-12.10775l-16.74088,-28.96061l-17.35678,5.97689c-4.75298,-3.90453 -10.18919,-7.00948 -16.097,-9.23828l-3.51335,-18.08464zM81.08691,28.66667h9.82617l2.78548,14.33333l7.47461,2.82747c4.50543,1.69806 8.5533,4.02927 12.06575,6.91471l6.18685,5.06706l13.77344,-4.73112l4.91308,8.49642l-11.00195,9.57422l1.25976,7.88054v0.014c0.43823,2.68706 0.62989,4.94121 0.62989,6.9567c0,2.0155 -0.19164,4.26931 -0.62989,6.9567l-1.27376,7.88053l11.00195,9.57422l-4.91309,8.51042l-13.75944,-4.74511l-6.20084,5.08105c-3.51245,2.88544 -7.54633,5.21665 -12.05175,6.91472h-0.014l-7.4746,2.82747l-2.78548,14.33333h-9.81218l-2.78548,-14.33333l-7.47461,-2.82747c-4.50544,-1.69806 -8.5533,-4.02927 -12.06575,-6.91472l-6.18685,-5.06706l-13.77344,4.73112l-4.91309,-8.49642l11.01595,-9.58822l-1.27376,-7.85254v-0.014c-0.43195,-2.69874 -0.62988,-4.95921 -0.62988,-6.9707c0,-2.0155 0.19165,-4.26931 0.62988,-6.9567l1.27376,-7.88053l-11.01595,-9.57422l4.91309,-8.51042l13.77344,4.74512l6.18685,-5.08105c3.51245,-2.88545 7.56032,-5.21665 12.06575,-6.91471l7.47461,-2.82747zM86,57.33333c-15.74175,0 -28.66667,12.92492 -28.66667,28.66667c0,15.74175 12.92492,28.66667 28.66667,28.66667c15.74175,0 28.66667,-12.92492 28.66667,-28.66667c0,-15.74175 -12.92492,-28.66667 -28.66667,-28.66667zM86,71.66667c7.96559,0 14.33333,6.36775 14.33333,14.33333c0,7.96559 -6.36775,14.33333 -14.33333,14.33333c-7.96559,0 -14.33333,-6.36775 -14.33333,-14.33333c0,-7.96559 6.36775,-14.33333 14.33333,-14.33333z"></path>
        </g>
    </g>
</svg>
</div>
<!-- end icons -->
</div>

`

$('.sidebar').innerHTML = sidebar