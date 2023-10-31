import { Component } from '@angular/core';



@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
    
    private NAMES = [
        'Aarav', 'Vivaan', 'Advik', 'Saanvi', 'Ishaan',
        'Aanya', 'Vihaan', 'Arjun', 'Ananya', 'Diya'
    ];
    
    private IMAGE_URLS = [
        'assets/img1.jpg', 'assets/img2.jpg', 'assets/download (1).jpg', 'assets/img3.avif',
        'assets/img5.webp', 'assets/google.png', 'assets/img5.webp', 'assets/download (2).jpg',
        'assets/img3.avif', 'assets/download (1).jpg'
    ];
    
    contacts: any[] = Array.from({length: 10}).map((_, idx) => {
        let numberOfMessages = Math.floor(Math.random() * 10) + 5;  // generates random number of messages between 5 and 15
        let messages = Array.from({length: numberOfMessages}).map((_, mIdx) => {
            return {
                text: `Message ${mIdx + 1} from ${this.NAMES[idx]}!`,
                type: mIdx % 2 === 0 ? 'received' : 'sent',
                timestamp: new Date().toLocaleTimeString(),
                status: 'seen'
            }
        });
    
        return {
            id: idx + 1,
            name: this.NAMES[idx],
            img: this.IMAGE_URLS[idx],
            onlineStatus: (idx % 2 === 0) ? 'Online' : 'Offline',
            isTyping: false,
            unseenMessages: Math.floor(Math.random() * 100) + 1, 
            messages: messages
        }
    });
    
    
    activeContact: any = null;
    typingTimeout: any = null;

    selectContact(contact: any): void {
        this.activeContact = contact;
        this.activeContact.unseenMessages = 0;
    }

    openSettings(): void {
        alert('Settings Opened!');
    }

    initiateCall(): void {
        alert('Call Initiated!');
    }

    initiateVideoCall(): void {
        alert('Video Call Initiated!');
    }

    deleteContact(id: number): void {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
    }

    clearChat(): void {
        if (this.activeContact) {
            this.activeContact.messages = [];
        }
    }

    onTyping(): void {
        if (this.activeContact && !this.activeContact.isTyping) {
            this.activeContact.isTyping = true;
            
            if (this.typingTimeout) {
                clearTimeout(this.typingTimeout);
            }
            
            this.typingTimeout = setTimeout(() => {
                this.activeContact.isTyping = false;
            }, 2000);  // The typing status will last for 2 seconds
        }
    }

    stopTyping(): void {
        if (this.activeContact) {
            this.activeContact.isTyping = false;
        }
    }

    sendMessage(text: string): void {
        if (text && this.activeContact) {
            this.activeContact.messages.push({
                text: text,
                type: 'sent',
                timestamp: new Date().toLocaleTimeString(),
                status: 'sent'
            });
        }
    }

    editMessage(message: any): void {
        if (message) {
            const newText = prompt('Edit your message:', message.text);
            if (newText) {
                message.text = newText;
            }
        }
    }
}
