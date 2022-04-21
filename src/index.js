//Here we're importing items we'll need. You can add other imports here.

let table;

// exposing loadData to FileMaker Script
window.loadData = function (json) {
  // const data = JSON.parse(json);
  const obj = JSON.parse(json);
  const{data, type} = obj ;

  const admissionsColumns =   [
    {title:"School",data:"fieldData.School", visible:false},
    {title:"Region",data:"fieldData.Region"},
    {title:"Year",data:"fieldData.MatricYear"},
    {title:"Decision",data:"fieldData.Decision"}];
  const customerColumns =   [
    {title:"City",data:"fieldData.City"},
    {title:"Company",data:"fieldData.CompanyName"},
    {title:"ZipCode",data:"fieldData.Zip"}];

  const columns = type === "Customers" ? customerColumns : admissionsColumns;

  console.log(data);
  // TODO: Load the DataTables libraries by linking to the DataTables CDN.
  //TODO: Get data from FileMaker
  //TODO: prep it for the JS.

  //TODO: create the columns.

  //TODO: Explore options of Datatables
  //https://datatables.net/reference/option/
  //https://datatables.net/examples/index
  // Create the DataTable, after destroying it if already exists
  table = $("#dtable").DataTable({
    paging: false,
    pageLength: 20,
    searching: true,
    colReorder: true,
    columns: columns,
    // [{title:"City",data:"fieldData.City"},{title:"Company",data:"fieldData.CompanyName"}],
    // [{title:"City",data:"fieldData.School"},{title:"Company",data:"fieldData.Region"}],
    // [{title:"First Name",data:"firstName", width:"20%"}, {title:"Last Name", data:"lastName"},],
    data: data,
    
  //   [
  //     {firstName:"George", lastName:"Harrison"},
  //     {firstName:"Paul", lastName:"McCartney"},
  //     {firstName:"John", lastName:"Lennor"},
  //     {firstName:"Ringo", lastName:"Starr"},
  // ],
  });
};
