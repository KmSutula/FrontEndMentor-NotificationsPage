const notifications = document.querySelectorAll(".notification");
const notificationDetailsBody = document.querySelectorAll(
  ".notif-details-body"
);
const markAll = document.getElementById("dismiss-notif");

markAll.addEventListener("click", () => {
  const notifDots = document.querySelectorAll(".notif-dot");
  notifDots.forEach((dot) => dot.remove());
});
notifications.forEach((notification, index) => {
  if (notification.classList.contains("new")) {
    const notifDot = document.createElement("div");
    notifDot.classList.add("notif-dot");
    notificationDetailsBody[index].appendChild(notifDot);
  }
});

notifications.forEach((notification, index) => {
  notification.addEventListener("click", () => {
    const notifDot = notificationDetailsBody[index].querySelector(".notif-dot");
    if (!notifDot) return;
    notification.classList.remove("new");
    notificationDetailsBody[index].removeChild(notifDot);
  });
});
