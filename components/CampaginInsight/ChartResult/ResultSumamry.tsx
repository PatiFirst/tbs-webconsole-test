

export default function ResultSummary() {
    return (
        <div className="resultGridContainer">
            <div className="resultGrid">
                <div id="resultTopic1">
                    <p>เครดิสที่เคยใช้ทั้งหมด</p>
                </div>
                <div id="result1">
                    <span>830</span>
                    <div className="creditUnitCircle">
                        <span className="creditUnit">c</span>
                    </div>
                </div>
                <div id="resultTopic2">
                    <p>คิดเป็นงบโดยประมาณ</p>
                </div>
                <div id="result2">
                    <span>399</span>
                    <span>บาท</span>
                </div>
                <div id="resultTopic3">
                    <p>CTR</p>
                </div>
                <div id="result3">
                    <span>45.34%</span>
                </div>
                <div id="resultTopic4">
                    <p>CPC</p>
                </div>
                <div id="result4">
                    <span>0.88</span>
                </div>
            </div>
        </div>
                

    )
}
