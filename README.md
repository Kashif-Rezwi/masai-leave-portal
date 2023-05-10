# masai-leave-portal

This is a leave portal for Masai students and employees, where one can apply for leave through a form, and check the status from a dashboard.

1. The app has a navbar with the following pages

   - Leave Request Page (index.html)
   - Dashboard Page (dashboard.html)
   - Status Page (status.html)

2. The leave request page has a form with following fields.
   -Unique ID: Should be unique, duplicate ID will not be allowed.
   -Name: Should be at least 4 characters.
   -Reason for leave : It is a textarea input field
   -Designation : (Employee / Student)
   -Leave Start Date : It is a date input field (user will not be able to select past dates)
   -Leave End Date : It is a date input field (user will not be able to select past dates)
   -Overseer: (EC / HR / Manger)
   -Apply Button

3. On clicking “Apply” the form will be validated and if the user has entered any value that does not match the constraints given, appropriate alerts will be shown.

<img src="https://raw.githubusercontent.com/Kashif-Rezwi/masai-leave-portal/main/templates/Screenshot%202023-05-10%20164802.png" alt="homepage" />

4. After successful validation, the registration data will be stored in LocalStorage.

5. All the users who have applied for leave will be displayed in the form of a table with all the fields entered during the registration as columns. Along with these fields, a new field called “OTP” will be appended to each user, with a 4-digit number, which will be randomly generated.

6. Each row will also contain “Reject Leave” and “Grant Leave” buttons colored “Red ” and “Green ” respectively.

<img src="https://raw.githubusercontent.com/Kashif-Rezwi/masai-leave-portal/main/templates/Screenshot%202023-05-10%20165309.png" alt="dashboard" />

7. Clicking on Reject Leave button, an alert will be shown and that particular row will be removed from the dashboard.

8. Clicking on Grant Leave button, the user will be prompted by a modal/popup with the following details and an OTP component where the user has to enter the correct OTP generated during the registration and OTP will be unique for each user.

9. On OTP verification, the row will be removed from the dashboard. On, incorrect OTP, respective alert will be given.

10. The dashboard page have the following functionalities
    - Filter by Designation (Employee / Student)
    - Search by Name (onChange event)
    - Sort by days (Should be calculated from start and end date)

All the above functionalities is working togather seamlessly.

<img src="https://raw.githubusercontent.com/Kashif-Rezwi/masai-leave-portal/main/templates/Screenshot%202023-05-10%20165152.png" alt="modal" />

11. The status page is contain all the users who have applied for the leave with the following fields as columns
    - Unique ID
    - Name
    - Days of leave (Calculated from start and end date)
    - Overseer
    - Status (Granted, Rejected, or Pending)
12. The user will also be able to filter the data based on the status (Granted, Rejected, or Pending).

<img src="https://raw.githubusercontent.com/Kashif-Rezwi/masai-leave-portal/main/templates/Screenshot%202023-05-10%20165254.pn" alt="status page" />
g
