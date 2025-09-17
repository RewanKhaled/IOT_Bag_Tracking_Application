# IoT Bag Monitoring Service  

An IoT web application for monitoring the status and location of handbags/backpacks in real time.  
This project was developed as part of the **IoT Applications Development** course assignment.  

## 📌 Overview  
This application allows users to track their bags and get alerts if the bag is opened or leaves a predefined geofenced area.  
A Bag IoT device is placed inside each handbag, equipped with:  
- **Light sensor** – Detects whether the bag is opened or closed.  
- **GPS sensor** – Tracks the bag’s current location.  

Both **customers** (bag owners) and **customer service agents** have dedicated interfaces to register, monitor, and manage bags.  

---

## 🗂 Project Pages  
The system includes the following pages:  

- **Customer Service Agent** – Interface for adding/registering bags, defining sensors, and linking bags to their owners.  
- **Map Last Status** – Displays the bag’s latest known location on a map.  
- **NavBar** – Common navigation bar used across all pages.  
- **Historical Locations** – Shows past locations of the bag in a timeline format.  
- **Log In** – Secure login for end users using Bag ID and password.  
- **Mobile Customer Service** – Mobile-friendly version of the customer service page.  
- **Mobile Historical Locations** – Mobile view for historical tracking.  
- **Mobile Map** – Mobile-friendly page to show the bag’s current location on a map.

---

## ⚙️ Features  
- **Bag Registration:** Customer service can register a new bag, assign sensors, and store owner info.  
- **Real-Time Tracking:** Displays current bag location using Google Maps.  
- **Open/Close Status:** Uses light intensity readings to show if the bag is open.  
- **Historical Tracking:** View past locations of the bag.  
- **Geofencing:** Triggers an event and sends an alert if the bag leaves a specified radius.  
- **Email Alerts:** Sends an email notification when the bag is opened or leaves the geofenced area.  

---

## 🛠️ Technology Stack  
- **IoT Sensors:** GPS, Light Intensity (Virtual Sensors), Consolidated sensor.  
- **Frontend:** Web pages with map plugin and form generator.  
- **Backend:** Virtual sensor data processing and geofencing logic.  
- **Notifications:** Email alerts for monitored events.  

---

## 📸 Demo Screenshots
# LogIn Page
<img width="751" height="449" alt="Loging" src="https://github.com/user-attachments/assets/30347b81-00da-4aa3-9ce2-db17d07c2789" />

# Customer Service Agent Page
<img width="808" height="439" alt="Customer Service Agent" src="https://github.com/user-attachments/assets/921014f3-c58e-432c-aa21-ae9f2af8e619" />

# Map Tracker Page
<img width="607" height="427" alt="Map Tracker" src="https://github.com/user-attachments/assets/606a7047-7188-49ee-b430-a10e2dd36fbf" />

# Historical Locations Page
<img width="938" height="437" alt="Historical Locations" src="https://github.com/user-attachments/assets/c56a3b12-c6d7-44a3-842d-94c535df5ae3" />

# Mobile Customer Service
![Mobile Customer Service](https://github.com/user-attachments/assets/4b3b3e63-e620-4970-94ca-0f2f0234a24e)

# Mobile Map Tracker Selecting Bag 1
![Mobile Map Tracker Selecting Bag 1](https://github.com/user-attachments/assets/f50871ca-17b9-4c6e-956a-6bb4a6259a14)

# Mobile Map Tracker Selecting Bag 2
![Mobile Map Tracker Selecting Bag 2](https://github.com/user-attachments/assets/d891dede-e177-447b-a918-e7a50c0f5287)

# Mobile Historical Locations
![Mobile Historical Locations](https://github.com/user-attachments/assets/2745174a-2781-4ecb-8392-473869fefaa3)

# Emails
<img width="960" height="441" alt="Emails" src="https://github.com/user-attachments/assets/8ed012dd-16a1-4f2b-9527-3e51fb70956f" />

