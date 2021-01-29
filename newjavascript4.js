export function startEvent () {
    var x = setInterval(function() {
        let evTitle = $eventTitle.value;
        let evDate = new Date($eventDate.value).getTime();
        let nowDate = new Date().getTime();
        let toDate = evDate-nowDate;
        if (toDate>=0) {
            var days = Math.floor(toDate / (1000 * 60 * 60 * 24));
            var hours = Math.floor((toDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((toDate % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((toDate % (1000 * 60)) / 1000);
            
            $result.innerHTML =`The Event ${evTitle} will start after <br>
            ${days} d ${hours} h ${minutes} m ${seconds} s`;
        }
        else {
            alert("Already Passed");
            clearInterval(x);
            $evTitle.classList.remove("disabled");
            $evDate.classList.remove("disabled");
            $startBtn.classList.remove("disabled");
            $stopBtn.classList.add("disabled");
    }},1000);

