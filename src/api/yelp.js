import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer -xYBVVRqmsC0NjUxn2afbS_ej3FLxWKtsuMj_XaCqeVbHH3NjWjCisB0hsZiSdrpnTNjnrIn1SSXZPFvPShtmg3GcKEFjmHEBs-BxjwyN8vqN7e5yxUL4vS9scDlXXYx'
    }
});
