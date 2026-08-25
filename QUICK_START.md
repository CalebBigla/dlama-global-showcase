# ⚡ Quick Start Guide - Dlama Global Homes

## 🚀 Get Started in 3 Steps

### 1. Run the Site Locally
```bash
cd dlama-global-showcase-main
npm install    # (Already done, skip if installed)
npm run dev    # Start development server
```
Then open: http://localhost:3000

### 2. Review the Pages
- **Home** - `/` - Main landing page
- **Estates** - `/properties` - All listings with filters
- **Estate Detail** - `/properties/parkview-estate-50x100` - Example detail page
- **About** - `/about` - Company story
- **FAQ** - `/faq` - 24 Q&As
- **Contact** - `/contact` - Forms & office info

### 3. Make It Yours
1. **Add logo** → `src/components/Brand.tsx`
2. **Add photos** → `src/lib/data.ts` (IMAGES object)
3. **Verify pricing** → `src/lib/data.ts` (properties array)

## 📁 Key Files to Know

### Content & Data
```
src/lib/data.ts          # All properties, pricing, content
```

### Pages
```
src/routes/index.tsx                    # Home page
src/routes/properties.index.tsx         # Estates listing
src/routes/properties.$propertyId.tsx   # Estate detail
src/routes/about.tsx                    # About Us
src/routes/faq.tsx                      # FAQ
src/routes/contact.tsx                  # Contact
```

### Global Components
```
src/components/Navbar.tsx         # Top navigation
src/components/Footer.tsx         # Bottom footer
src/components/WhatsAppButton.tsx # Floating WhatsApp
src/components/PropertyCard.tsx   # Estate listing card
```

## 🎨 Customize Brand Colors

**File**: `src/styles.css`

Current colors:
```css
Navy:  #1a2a52
Gold:  #c9a24b
```

To change, search for `--color-navy` and `--color-gold`

## 💰 Add New Estate

**File**: `src/lib/data.ts`

Add to `properties` array:
```typescript
{
  id: "estate-name-plot-size",
  name: "Estate Name - Plot Size",
  location: "Location, Yola",
  country: "Nigeria",
  price: 1000000,
  originalPrice: 1200000,  // Optional
  currency: "₦",
  status: "For Sale",
  type: "Plot",
  plotSize: "50×100",
  paymentPlan: "4 months",
  badge: "C of O",  // Optional
  image: IMAGES.villa,
  gallery: [IMAGES.villa, IMAGES.interior, IMAGES.pool, IMAGES.villa2],
  agentId: "dlama-sales",
  featured: true,
  description: "Your description here...",
  features: [
    "Feature 1",
    "Feature 2",
    // ... more features
  ],
}
```

## 📞 Update Contact Info

### Phone Number (3 locations)
1. `src/components/Footer.tsx` - Line ~90
2. `src/routes/contact.tsx` - Line ~85
3. `src/components/WhatsAppButton.tsx` - Line ~5

### Office Address (2 locations)
1. `src/components/Footer.tsx` - Line ~92
2. `src/routes/contact.tsx` - Line ~45

## 🏗️ Build for Production

```bash
npm run build    # Creates dist/ folder
npm run preview  # Test production build locally
```

Then deploy `dist/` folder to:
- Vercel (recommended)
- Netlify
- Any Node.js hosting

## 🐛 Common Issues

### "Images not loading"
- Images are Unsplash placeholders
- Replace URLs in `src/lib/data.ts`

### "WhatsApp doesn't work"
- Only works on devices with WhatsApp installed
- Test on actual phone, not desktop

### "Build fails"
- Run `npm install` first
- Check Node version: `node --version` (need 18+)

### "Forms don't send emails"
- Forms are UI-only currently
- Need backend/email service (Formspree, etc.)

## 📚 Documentation

- **BUILD_SUMMARY.md** - Complete feature list
- **DEPLOYMENT_READY.md** - Full deployment guide  
- **LAUNCH_CHECKLIST.md** - Pre-launch tasks
- **CUSTOMIZATION_NOTES.md** - What was changed

## 🎯 Before You Launch

### Critical (Must Do)
- [ ] Add your logo
- [ ] Replace property images
- [ ] Verify all pricing
- [ ] Test on mobile phone

### Important (Should Do)
- [ ] Update testimonials with real quotes
- [ ] Review FAQ answers
- [ ] Test all contact methods
- [ ] Proofread all text

## 💬 Quick Edits

### Change Tagline
**File**: `src/routes/index.tsx`
**Line**: ~97
```tsx
Live Better.  // Change this
```

### Change Company Description
**File**: `src/components/Footer.tsx`
**Line**: ~28
```tsx
Invest Smart, Live Better — Your trusted...  // Edit here
```

### Add Social Media Link
**File**: `src/components/Footer.tsx`
**Line**: ~34-60
Add new link object to array

## ⚡ Performance Tips

### Images
- Keep under 500KB each
- Use WebP format if possible
- Compress before uploading

### Load Speed
- Already optimized!
- Lazy loading enabled
- Code splitting done
- Minimal dependencies

## 🔗 Useful Commands

```bash
npm run dev        # Start development (http://localhost:3000)
npm run build      # Build for production
npm run preview    # Test production build
npm run lint       # Check code quality
npm run format     # Format code
```

## 📱 Test on Mobile

### Option 1: Your Phone
1. Run `npm run dev`
2. Find your IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. Open `http://YOUR_IP:3000` on phone
4. Must be on same WiFi

### Option 2: Browser Dev Tools
1. Open site in browser
2. Press F12
3. Click phone icon (top-left)
4. Select iPhone or Android

## 🎉 You're All Set!

### Next Steps
1. Review site at http://localhost:3000
2. Add your images
3. Check BUILD_SUMMARY.md for details
4. Use LAUNCH_CHECKLIST.md before going live

### Need Help?
- All code is commented
- Check documentation files
- Files are organized logically
- Components are reusable

---

**Built for**: Dlama Global Homes  
**Tagline**: "Invest Smart, Live Better"  
**Contact**: 08060774472 | WhatsApp  
**Location**: Jimeta, Yola, Adamawa State

**Website Status**: ✅ Ready for Content & Launch
