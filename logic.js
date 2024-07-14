function plotGraph() {
    // clear any previous content in the graph element
    const graph = document.getElementById('graph');
    graph.innerHTML = '';

    // js takes input as string, thus converting them and storing in appropriate named variables
    // can be done in a single line

    const var2=document.getElementById('Food').value;
    const food=parseFloat(var2);
    const var3=document.getElementById('Travel').value;
    const travel=parseFloat(var3);
    const var4=document.getElementById('PersonalCare').value;
    const perc=parseFloat(var4);
    const var5=document.getElementById('Skill').value;
    const skil=parseFloat(var5);
    const var6=document.getElementById('Others').value;
    const oth=parseFloat(var6);
    
    // expenditure bar plot

    // const xData=["Income","Food", "Travel", "Personal Care", "Skill Development", "Others"];
    const xData=["Food", "Travel", "Personal Care", "Skill Development", "Others"];
    // const yData=[inc, food, travel, perc, skil, oth];
    const yData=[food, travel, perc, skil, oth];

    // prepare data for bar chart trace
    const barTrace={
        x: xData,
        y: yData,
        type: 'bar'
    };

    // layout for chart
    const layout = {
        title: 'Bar Graph of Category-wise Expenditure',
    };

    // plot the graph
    Plotly.newPlot(graph, [barTrace], layout);
}

// function for textual insights
function Analyse(){

    // fetching all variable values
    const var1=document.getElementById('Income').value;
    const inc=parseFloat(var1);
   
    const var2=document.getElementById('Food').value;
    const food=parseFloat(var2);
    const var3=document.getElementById('Travel').value;
    const travel=parseFloat(var3);
    const var4=document.getElementById('PersonalCare').value;
    const perc=parseFloat(var4);
    const var5=document.getElementById('Skill').value;
    const skil=parseFloat(var5);
    const var6=document.getElementById('Others').value;
    const oth=parseFloat(var6);

    // calculating percentages and total sum 
    const list = ['Food', 'Travel', 'PersonalCare', 'Skill', 'Others'];
    const amounts = [food, travel, perc, skil, oth];
    const per = [];
    let percentageOutput = '';
    let totalOut = '';
    let sumT=0;
    let sav= '';
    let s=0;

    for (let i = 0; i < list.length; i++) {
        per[i] = (amounts[i]/ inc) * 100;
        sumT+=amounts[i];
        percentageOutput += `Amount spent on ${list[i]} is ${per[i].toFixed(2)}%\ of total income<br>`;
    }

    totalOut+=`Total amount spent is ${sumT.toFixed(2)}<br>`;
    s=inc-sumT;
    sav+=`Total amount saved is ${s.toFixed(2)}<br>`;  

    // displaying on html page
    document.getElementById('percentage-output').innerHTML = percentageOutput;
    document.getElementById('total-output').innerHTML = totalOut;
    document.getElementById('total-save').innerHTML = sav;

}