//Declare function to calculate net pay using gross amount as the argument, and initialize constant variables
function calculateNetPay (salary, benefits) {
  let gross = salary + benefits
  
  let netPay = 0

//function that calculates deduction of housing levy
function calculateHousingLevy(gross){
  let housingLevy = (1.5/100)*gross
  return housingLevy
}

//function to determine the NSSF contribution. The employer matches the contribution
function calculateNSSF(gross){
  let NSSF;
    if(gross >= 0 && gross <= 6000){
      let tier1		= gross * (0.06+0.06);
      let tier2		= 0;
      return NSSF 		= parseFloat(tier1) + parseFloat(tier2);
      }
    else if(gross >= 6001 && gross <= 18000 ){
      let tier1		= 6000 * (0.06+0.06);
      let tier2		= (gross - 6000) * (0.06+0.06);
      return NSSF	= parseFloat(tier1) + parseFloat(tier2);		
      }
    else if(gross > 18000 ){
      let tier1		= 6000 * (0.06+0.06);
      let tier2		= 12000 * (0.06+0.06);
      return NSSF		= parseFloat(tier1) + parseFloat(tier2);
      }
}
let taxableIncome = gross - calculateNSSF(gross)
//function to calculate PAYE - payable to KRA
function calculatePAYE(taxableIncome){
    let taxPayable = 0
    let personalRelief = 2400
//insurance relief is 15% of (NHIF+Insurance premiums) but will not exceed 5000 p.m    
    let insuranceRelief
      if (calculateNHIF(gross) <= 5000){
        insuranceRelief= (15/100)*calculateNHIF(gross);
      }
      else {
      insuranceRelief = 5000
    }
//Affordable housing relief is at 15% and capped at 9000 p.m
    let affordableHousingRelief 
      if (calculateHousingLevy(gross) <= 9000){
        affordableHousingRelief= (15/100)*calculateHousingLevy(gross);
      }
      else {
      affordableHousingRelief = 9000
      }
    let PAYE = 0
    
    if(taxableIncome >= 0 && taxableIncome <= 24000){
        let tax_rate       = 10;
        let tax_bracket_10 = (taxableIncome - 0)/100* tax_rate;
        let tax_bracket_25 = 0;
        let tax_bracket_30 = 0;
        let tax_bracket_32 = 0;
        let tax_bracket_35 = 0;
        taxPayable				= parseFloat(tax_bracket_10);
    }else if(taxableIncome >= 24001 && taxableIncome <= 32333){
        let tax_rate       = 25;
        let tax_bracket_10 = 2400;
        let tax_bracket_25 = (taxableIncome - 24000) / 100 * tax_rate;
        let tax_bracket_30 = 0;
        let tax_bracket_32 = 0;
        let tax_bracket_35 = 0;
        taxPayable			   = parseFloat(tax_bracket_10) + parseFloat(tax_bracket_25);
    }else if(taxableIncome >= 32334 && taxableIncome <= 500000){
        let tax_rate       = 30;
        let tax_bracket_10 = 2400;
        let tax_bracket_25 = 2083.25;
        let tax_bracket_30 = (taxableIncome - 32333) / 100 * tax_rate;
        let tax_bracket_32 = 0;
        let tax_bracket_35 = 0;
        taxPayable			   = parseFloat(tax_bracket_10) + parseFloat(tax_bracket_25) + parseFloat(tax_bracket_30);
    }else if(taxableIncome >= 500001 && taxableIncome <= 800000){
        let tax_rate       = 32.5;
        let tax_bracket_10 = 2400;
        let tax_bracket_25 = 2083.33;
        let tax_bracket_30 = 140300;
        let tax_bracket_32 = (taxableIncome - 500000) / 100 * tax_rate;
        let tax_bracket_35 = 0;
        taxPayable			   = parseFloat(tax_bracket_10) + parseFloat(tax_bracket_25) + parseFloat(tax_bracket_30) + parseFloat(tax_bracket_32);
    }else if(taxableIncome >= 800001){
        let tax_rate       = 35;
        let tax_bracket_10 = 2400;
        let tax_bracket_25 = 2083.33;
        let tax_bracket_30 = 140300;
        let tax_bracket_32 = 97500;
        let tax_bracket_35 = (taxableIncome - 800000) / 100 * tax_rate;
        taxPayable			   = parseFloat(tax_bracket_10) + parseFloat(tax_bracket_25) + parseFloat(tax_bracket_30) + parseFloat(tax_bracket_32) + parseFloat(tax_bracket_35);
 }
    return PAYE = taxPayable -(personalRelief+insuranceRelief+affordableHousingRelief)
}

//function to determine the NHIF deduction - which is deducted from Net pay 
function calculateNHIF(gross){
  let NHIF
    if(gross >0  && gross <= 5999){
      NHIF = 150;
      }
    else if(gross >= 6000 && gross <= 7999){
      NHIF = 300;
      }
    else if(gross >= 8000 && gross <= 11999){
      NHIF = 400;
      }
    else if(gross >= 12000 && gross <= 14999){
      NHIF = 500;
      }
    else if(gross >= 15000 && gross <= 19999){
    NHIF = 600;
    }
    else if(gross >= 20000 && gross <= 24999){
    NHIF = 750;
    }
    else if(gross >= 25000 && gross <= 29999){
    NHIF = 850;
    }
    else if(gross >= 30000 && gross <= 34999){
    NHIF = 900;
    }
    else if(gross >= 35000 && gross <= 39999){
    NHIF = 950;
    }
    else if(gross >= 40000 && gross <= 44999){
    NHIF = 1000;
    }
    else if(gross >= 45000 && gross <= 49999){
    NHIF = 1100;
    }
    else if(gross >= 50000 && gross <= 59999){
    NHIF = 1200;
    }
    else if(gross >= 60000 && gross <= 69999){
    NHIF = 1300;
    }
    else if(gross >= 70000 && gross <= 79999){
    NHIF = 1400;
    }
    else if(gross >= 80000 && gross <= 89999){
    NHIF = 1500;
    }
    else if(gross >= 90000 && gross <= 99999){
    NHIF = 1600;
    }
    else if(gross >= 100000){
    NHIF = 1700;	
    }
    return NHIF;  
  }
  console.log('gross: '+ gross)
  console.log(`Housing Levy: ` +calculateHousingLevy(gross))
  console.log('NHIF: ' + calculateNHIF(gross))
  console.log('NSSF: ' + calculateNSSF(gross))
  console.log('PAYE: ' + calculatePAYE(taxableIncome))
return netPay = (gross -(calculateHousingLevy(gross)+ calculateNSSF(gross)+calculatePAYE(taxableIncome)))-calculateNHIF(gross)
}
//call net pay calculator function and assume no(0) benefits
calculateNetPay(100000,0)