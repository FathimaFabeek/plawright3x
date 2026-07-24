let Actual_status_code=200;
let Expected_status_code=200;
let test_result= Actual_status_code===Expected_status_code?"pass":"Failed";
console.log(test_result);
//2
let environment="staging";
let baseUrl=environment==="prod"?"https://api.example.com":"https://staging.example.com";
console.log(baseUrl);
//3
let isCI=true;
let browserMode=isCI? "headless":"headed";
console.log("launching browser in : ", browserMode, "mode");
//4
let Response_time=850;
let sla=1000;
let sla_status=Response_time<=sla?"wITHIN SLA":"SLA breached";
console.log(`Response: ${Response_time}ms - ${sla_status}`);//template literal
console.log(`what is the SLA Time? -${sla}`);
let condition=true;
let isSKMale=condition?"true":"false";
console.log(isSKMale);