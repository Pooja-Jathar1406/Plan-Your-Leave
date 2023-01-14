import express from "express";
import { createConnection } from "mysql";
import cors from "cors";
const app = express();

//middelware to read json request body
app.use(cors());
app.use(express.json());

//create db connection
//it returns connection object
const conn = createConnection({
  host: "localhost",
  user: "root",
  password: "pooja123",
  database: "emp_leave_and_attendance_mgmt",
});

//to check if connection is successful or not
conn.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("connection created");
  }
});

//--------------------to store data of leaverequests in DB------------
app.post("/", (request, response) => {
  var insertQry = `INSERT INTO Leave_requests(Emp_ID,From_Date, To_Date,No_of_Days,Leave_Type,Reason,Req_Status) values(
       ' ${request.body.Emp_ID}',
        '${request.body.From_Date}',
        '${request.body.To_Date}',
        '${request.body.No_of_Days}',
        '${request.body.Leave_Type}',
        '${request.body.Reason}',
        '${request.body.Req_Status}'
        )`;

  conn.query(insertQry, (error, result) => {
    if (error) {
      response
        .status(500)
        .send({ message: "Error in inserting leave request" });
    } else {
      response
        .status(201)
        .send({ message: "Leave request created successfully" });
    }
  });
});

//--------------------to get data of leave requests-----------------
app.get("/", (request, response) => {
  var selectQry = "SELECT * FROM Leave_requests ";

  conn.query(selectQry, (error, result) => {
    if (error) {
      response.status(500).send({ message: "Error in fetching request" });
    } else {
      response.status(201).send(result);
    }
  });
});

// -------------------to delete the leave request-----------------------

app.delete("/leave_req/:Req_Id", (request, response) => {
  var deleteQry =
    "DELETE FROM Leave_requests WHERE Req_Id=" + request.params.Req_Id;

  conn.query(deleteQry, (error, result) => {
    if (error) {
      response.status(500).send({ message: "Error in deleting the request." });
    } else {
      response
        .status(201)
        .send({ message: "Successfully deleted the request!" });
    }
  });
});

//-------------------------------------------------------------------------
//--------------------------Approval page----------------------------

app.get("/approvals", (request, response) => {
  var selectQry = "SELECT * FROM Leave_requests WHERE Req_Status='Pending';";

  conn.query(selectQry, (error, result) => {
    if (error) {
      response.status(500).send({ message: "Error in fetching request" });
    } else {
      response.status(201).send(result);
    }
  });
});

app.put("/approvals/:Req_Id", (request, response) => {
  var approveQry =
    "UPDATE Leave_requests SET Req_Status='Approved' WHERE Req_Id=" +
    request.params.Req_Id;

  conn.query(approveQry, (error, result) => {
    if (error) {
      response.status(500).send({ message: "Error in approving the request." });
    } else {
      response
        .status(201)
        .send({ message: "Successfully approved the request!" });
    }
  });
});

app.delete("/approvals/:Req_Id", (request, response) => {
  var approveQry =
    "UPDATE Leave_requests SET Req_Status='Rejected' WHERE Req_Id=" +
    request.params.Req_Id;

  conn.query(approveQry, (error, result) => {
    if (error) {
      response.status(500).send({ message: "Error in rejecting the request." });
    } else {
      response
        .status(201)
        .send({ message: "Successfully rejected the request!" });
    }
  });
});

//-------------------------------------------------------------------------
//--------------------------Attendance page----------------------------

app.post("/mark-attendance", (request, response) => {
  var insertQry = `INSERT INTO Attendance(Emp_Id,Attnd_Date, Entry_Time,Exit_Time) values(
       ' ${request.body.Emp_Id}',
        '${request.body.Attnd_Date}',
        '${request.body.Entry_Time}',
        '${request.body.Exit_Time}' 
        )`;

  conn.query(insertQry, (error, result) => {
    if (error) {
      response
        .status(500)
        .send({ message: "Error in marking the attendance " });
    } else {
      response.status(201).send({ message: "Attendance Marked successfully" });
    }
  });
});

//-----------------------------to edit the leave request -------------------

// app.put("/leave_req/:Req_Id", (request, response) => {
//   var deleteQry =
//     "UPDATE Leave_requests SET  WHERE Req_Id=" + request.params.Req_Id;

//   conn.query(deleteQry, (error, result) => {
//     if (error) {
//       response.status(500).send({ message: "Error in updating the request." });
//     } else {
//       response
//         .status(201)
//         .send({ message: "Successfully updated the request!" });
//     }
//   });
// });
//-----------------------------------------------------
app.listen(9800, () => {
  console.log("Listening on port 9800");
});
