$(() => {
	let milsec;
    let sec;
    let min;
    let hour;

    let timer;

    // スタート
    $("#start").click(() => {
        // 0:0:0:0から開始
		if(milsec == null && sec == null && min == null && hour == null){
			milsec =0;
			sec = 0;
			min = 0;
			hour = 0;
			timer = setInterval(count_up, 100);
            
			$("#start").prop("disabled", true);
			$("#stop,#reset").prop("disabled", false);
		}else{
            timer = setInterval(count_up, 100);

            $("#start").prop("disabled", true);
            $("#stop,#reset").prop("disabled", false);
        }
		
    });

    // ストップ
    $("#stop").click(() => {
        // 一時停止
		clearInterval(timer);
                            
        $("#stop").prop("disabled", true);
		$("#start,#reset").prop("disabled", false);
    });

    // リセット
    $("#reset").click(() => {
        // 0:0:0:0に戻す                                    
        clearInterval(timer);
		milsec = 0;
        sec = 0;
        min = 0;
        hour = 0;
        set_number(hour, min, sec, milsec);

        $("#stop,#reset").prop("disabled", true);
        $("#start").prop("disabled", false);
    });

    //カウントアップ
    function count_up() {
        milsec += 1;
		if(milsec > 9) {
			milsec = 0;
			sec += 1;
		}
        if (sec > 59) {
            sec = 0;
            min += 1;
        }

        if (min > 59) {
            min = 0;
            hour += 1;
        }
		set_number(hour, min, sec, milsec);
    }
	//文字列へ変換後、桁調整と表示
	function set_number(hour, min, sec, milsec) {
		milsec_number = String(milsec).slice(-1);
        sec_number = String(sec).slice(-2);
        min_number = String(min).slice(-2);
        hour_number = String(hour).slice(-2);
        $("#clock").html(hour_number + ":" + min_number + ":" + sec_number+ ":" + milsec_number);
	}
});
