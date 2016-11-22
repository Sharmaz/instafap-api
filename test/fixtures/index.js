export default {
  getImage () {
    return {
      id: '8fc60e7c-3b3c-48e9-a6a7-a5fe4f1fbc31',
      publicId: '2fNwVYePN8WqqDFvVf7XMN',
      userId: 'instafap',
      liked: false,
      likes: 0,
      src: 'http://instafap.test/2fNwVYePN8WqqDFvVf7XMN.jpg',
      description: '#awesome',
      tags: ['awesome'],
      createdAt: new Date().toString()
    }
  },
  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },
  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },
  getUser () {
    return {
      id: '20085f5f-969d-4bc1-b3df-99e699288311',
      name: 'Ivan Robles',
      username: 'elSharmaz',
      email: 'irae45@instafap.test',
      password: '1nst4fap',
      createdAt: new Date().toString()
    }
  }
}
