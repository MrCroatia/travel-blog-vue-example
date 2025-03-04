<template>
  <div class="contact-view">
    <div class="contact-container">
      <h1 class="contact-title">Contact Us</h1>
      <p class="contact-subtitle">
        Have questions about your next adventure? We're here to help!
      </p>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <h3>Our Office</h3>
              <p>123 Travel Street, Adventure City, 10001</p>
            </div>
          </div>
          
          <div class="info-item">
            <i class="fas fa-phone-alt"></i>
            <div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>hello@wanderlust.com</p>
            </div>
          </div>
          
          <div class="info-item">
            <i class="fas fa-clock"></i>
            <div>
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2>Send Us a Message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                placeholder="John Doe"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                v-model="formData.subject" 
                placeholder="Trip Inquiry"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                placeholder="Tell us about your travel plans or questions..."
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // This is a placeholder function
  // In a real application, you would send the form data to a server
  alert('Thank you for your message! We will get back to you soon.')
  
  // Reset form
  formData.name = ''
  formData.email = ''
  formData.subject = ''
  formData.message = ''
}
</script>

<style scoped lang="scss">
.contact-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.contact-title {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.contact-subtitle {
  font-size: 1.2rem;
  color: var(--text);
  margin-bottom: 3rem;
  max-width: 600px;
}

.contact-content {
  display: flex;
  width: 100%;
  gap: 3rem;
  text-align: left;
  
  @media (max-width: 900px) {
    flex-direction: column;
  }
}

.contact-info {
  flex: 1;
  background-color: var(--light);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  i {
    font-size: 1.5rem;
    color: var(--secondary);
    margin-right: 1rem;
    margin-top: 0.25rem;
  }
  
  h3 {
    font-size: 1.2rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--text);
    margin: 0;
    line-height: 1.5;
  }
}

.contact-form {
  flex: 1.5;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h2 {
    font-size: 1.8rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
  }
}

.form-group {
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text);
  }
  
  input, textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s;
    
    &:focus {
      outline: none;
      border-color: var(--secondary);
    }
  }
}

.submit-button {
  background-color: var(--secondary);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  
  &:hover {
    background-color: darken(#ff6b6b, 10%);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .contact-view {
    padding: 1rem;
  }
  
  .contact-title {
    font-size: 2rem;
  }
  
  .contact-subtitle {
    font-size: 1rem;
  }
}
</style>
