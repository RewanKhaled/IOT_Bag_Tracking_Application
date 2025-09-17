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

> **Screenshot Example:**  
> ![Project Pages](./images/project_pages.png)  
> *(Put your screenshot in `images/project_pages.png`)*  

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
- **IoT Sensors:** GPS, Light Intensity (Virtual Sensors).  
- **Frontend:** Web pages with map plugin and form generator.  
- **Backend:** Virtual sensor data processing and geofencing logic.  
- **Notifications:** Email alerts for monitored events.  

---

## 📸 Demo Screenshots
