window.onload = function() {
    const targetDate = new Date('2021-10-01T00:00:00Z'); // 目标日期
    const currentDate = new Date(); // 当前日期
    const differenceInMilliseconds = currentDate - targetDate; // 时间差（毫秒）
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)); // 转换为天数

    document.getElementById('daysSince').textContent = `It has been ${differenceInDays} days since October 1, 2021.`; // 显示天数
};