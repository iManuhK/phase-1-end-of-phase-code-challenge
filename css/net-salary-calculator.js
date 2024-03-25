
function calculateNetPay (gross) {
    let personalRelief = 2400
    let netPay = (gross - (calculatePAYE+calculateHousingLevy+calculateNSSF-personalRelief)-calculateNHIF)
  
  function calculatePAYE(gross){
    let PAYE;
    switch(true) {
      case gross <= 24000:
          PAYE = (10/100)*gross
      case gross >=24001 && gross <= 32333:
          PAYE = (15/100)*gross
      case gross >=32334 && gross <=500000:
          PAYE = (30/100)*gross
      case gross >=500001 && gross <=800000:
          PAYE = (32.5/100)*gross
      case gross >800000:
          PAYE = (35/100)*gross
    }
    return PAYE;
  }
  //function that calculates deduction of housing levy
  function calculateHousingLevy(gross){
    let housingLevy = (1.5/100)*gross
    return housingLevy
  }
  function calculateNSSF(gross){
    let NSSF;
    switch(gross) {
      case gross <= 7000:
          NSSF = (6/100)*gross
      case gross >=7001 && gross <= 36000:
          NSSF = (15/100)*gross
    }
    return NSSF;
  }
  //function to calculate the NHIF - which is based on net pay 
  function calculateNHIF(gross){
    let NHIF;
    switch(gross) {
      case gross < 6000:
          NHIF = 150
          break;
      case gross >=6000 && gross < 8000:
          NHIF = 300
          break;
      case gross >=8000 && gross < 12000:
        NHIF = 400
          break;
      case gross >=12000 && gross < 15000:
        NHIF = 500
          break;
      case gross >=15000 && gross < 20000:
        NHIF = 600
          break;
      case gross >=20000 && gross < 25000:
        NHIF = 750
          break;
      case gross >=25000 && gross < 30000:
        NHIF = 850
          break;
      case gross >=30000 && gross < 35000:
        NHIF = 900
          break;
      case gross >=35000 && gross < 40000:
        NHIF = 950
          break;
      case gross >=40000 && gross < 45000:
        NHIF = 1000
          break;
      case gross >=45000 && gross < 50000:
        NHIF = 1100
          break;
      case gross >=50000 && gross < 60000:
        NHIF = 1200
          break;
      case gross >=60000 && gross < 70000:
        NHIF = 1300
          break;
      case gross >=70000 && gross < 80000:
      NHIF = 1400
        break; 
      case gross >=80000 && gross < 90000:
        NHIF = 1500
          break;
      case gross >=90000 && gross < 100000:
        NHIF = 1600
          break;
        case gross >=100000:
        NHIF = 1700
          break;
    }
    return NHIF;   
  }
    return netPay
  }
  calculateNetPay(100000)
  