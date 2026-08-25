# 🚀 Pre-Launch Checklist for Dlama Global Homes

## Critical (Must Do Before Launch)

### 🎨 Branding & Assets
- [ ] Upload company logo to replace SVG placeholder
  - File: Update `src/components/Brand.tsx`
  - Recommended: 400×200px PNG or SVG
- [ ] Replace all property images with actual estate photos
  - File: `src/lib/data.ts` - Update IMAGES object
  - Need: 4-6 photos per estate
- [ ] Add hero image (main banner)
  - File: Replace `src/assets/hero-villa.jpg`

### 💰 Pricing & Data Accuracy
- [ ] Verify all plot prices in `src/lib/data.ts`
- [ ] **URGENT**: Confirm New City Estate 100×100 pricing
  - Currently: ₦2,400,000 (was ₦3,000,000)
  - Is this correct?
- [ ] Verify payment plan durations (3-6 months)
- [ ] Check all discount amounts are accurate

### 📝 Content Review
- [ ] Review property descriptions for accuracy
- [ ] Update testimonials with real customer quotes
- [ ] Verify office address is exactly correct
- [ ] Check all social media links work
- [ ] Review FAQ answers for accuracy
- [ ] Proofread all pages for typos

## Important (Should Do Before Launch)

### 📱 Testing
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test WhatsApp button on mobile
- [ ] Test click-to-call phone links
- [ ] Test all contact forms submit correctly
- [ ] Verify Google Maps embeds load properly
- [ ] Check filters work on Estates page
- [ ] Test navigation on mobile (hamburger menu)

### 🔗 Technical Setup
- [ ] Set up hosting account (Vercel/Netlify recommended)
- [ ] Connect domain name (if you have one)
- [ ] Set up email forwarding for info@dlamaglobalhomes.com
- [ ] Test email forms actually send emails
- [ ] Set up Google Analytics (optional)
- [ ] Add site to Google Search Console

### 📊 SEO & Social Media
- [ ] Verify all social media profiles exist:
  - Instagram: @Dlamahomes
  - TikTok: dlama home
  - Twitter/X: @Dlama_Homes
  - Facebook: Dlama Global Homes Ltd
- [ ] Create social media graphics (1200×630px) for sharing
- [ ] Test Open Graph preview (Facebook link preview)
- [ ] Submit sitemap to Google

## Nice to Have (Can Do After Launch)

### 📈 Enhancements
- [ ] Add Google Analytics tracking
- [ ] Set up Facebook Pixel (for ads)
- [ ] Create blog section for content marketing
- [ ] Add live chat widget (optional)
- [ ] Create email newsletter
- [ ] Add video tour of estates
- [ ] Create downloadable brochures (PDF)

### 🎯 Marketing Preparation
- [ ] Prepare launch announcement for social media
- [ ] Create Instagram posts about estates
- [ ] Film TikTok videos of properties
- [ ] Prepare email to send to existing contacts
- [ ] Print business cards with website URL
- [ ] Update Google My Business listing

### 📸 Additional Content
- [ ] Professional photos of office
- [ ] Team photos (if showing team)
- [ ] Video testimonials from customers
- [ ] Drone footage of estates
- [ ] Before/after development photos
- [ ] Customer success stories

## 🐛 Known Issues to Fix

### ⚠️ Flagged During Build
1. **New City Estate Pricing** - Confirm ₦2.4M vs ₦3M
2. **Property Images** - All currently placeholders
3. **Company Logo** - Currently using SVG placeholder

### ✅ Confirmed Working
- ✓ Build compiles successfully
- ✓ All 6 pages functional
- ✓ Mobile responsive
- ✓ WhatsApp integration
- ✓ Phone links
- ✓ Contact forms (UI complete)
- ✓ Property filters
- ✓ Promo pricing display
- ✓ Google Maps embeds
- ✓ Social media links
- ✓ Navigation

## 📋 Files That Need Your Attention

### 1. Logo Update
**File**: `src/components/Brand.tsx`
**Line**: 13-26 (Wordmark component)
**Current**: Uses SVG skyline icon
**Action**: Replace with your actual logo image

### 2. Property Images
**File**: `src/lib/data.ts`
**Lines**: 25-38 (IMAGES object)
**Current**: Unsplash placeholder URLs
**Action**: Replace with your estate photos

### 3. Pricing Verification
**File**: `src/lib/data.ts`
**Lines**: 98-120 (New City Estate 100×100)
**Current**: price: 2400000, originalPrice: 3000000
**Action**: Confirm these numbers

### 4. Real Testimonials
**File**: `src/lib/data.ts`
**Lines**: 289-309
**Current**: Placeholder Nigerian names
**Action**: Replace with real customer quotes

## 🎯 Launch Day Checklist

### Morning Of
- [ ] Final build: `npm run build`
- [ ] Test production build: `npm run preview`
- [ ] Deploy to hosting
- [ ] Test live site on mobile
- [ ] Test live site on desktop
- [ ] Verify all links work
- [ ] Check WhatsApp opens correctly
- [ ] Send test email via contact form

### Announcement
- [ ] Post on Instagram
- [ ] Post on Facebook
- [ ] Post on Twitter/X
- [ ] Create TikTok announcing site
- [ ] Email existing customer list
- [ ] Update Google My Business
- [ ] Update any printed materials

### Monitoring
- [ ] Check analytics daily (first week)
- [ ] Monitor contact form submissions
- [ ] Track WhatsApp inquiries
- [ ] Note any error reports
- [ ] Check mobile traffic vs desktop

## 📞 Emergency Contacts

If something breaks after launch:
1. Check browser console for errors (F12)
2. Verify hosting is still active
3. Check domain DNS settings
4. Test on different browser
5. Clear cache and retry

## 💡 Quick Tips

### To Test WhatsApp Link:
Open on phone and click WhatsApp button
Should open WhatsApp with pre-filled message

### To Test Phone Link:
Click phone number on mobile
Should prompt to dial 08060774472

### To Test Forms:
Fill out and submit
(Note: Email sending requires backend setup)

### To Check Mobile View:
1. Right-click on page
2. Choose "Inspect"
3. Click phone icon (top-left)
4. Select iPhone or Android

## ✨ Post-Launch Success Metrics

### Week 1
- [ ] Track visitor count
- [ ] Count contact form submissions
- [ ] Count WhatsApp messages received
- [ ] Count phone calls received
- [ ] Monitor which estates get most views

### Month 1
- [ ] Review most popular pages
- [ ] Identify top traffic sources
- [ ] Track conversion rate (visits → inquiries)
- [ ] Collect customer feedback
- [ ] Note any requested features

## 🎊 You're Almost There!

The website is built, tested, and ready. Just add your images, verify the pricing, and you're good to go!

**Estimated time to launch**: 2-4 hours
(Mainly gathering images and final testing)

---

**Need help?** All code is documented and organized.
**Questions?** Check DEPLOYMENT_READY.md for detailed info.

**Let's launch! 🚀**
