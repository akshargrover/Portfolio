---
name: Deep Interface Portfolio
colors:
  surface: '#12131b'
  surface-dim: '#12131b'
  surface-bright: '#383842'
  surface-container-lowest: '#0d0e16'
  surface-container-low: '#1a1b23'
  surface-container: '#1f1f27'
  surface-container-high: '#292932'
  surface-container-highest: '#34343d'
  on-surface: '#e3e1ed'
  on-surface-variant: '#c6c5d7'
  inverse-surface: '#e3e1ed'
  inverse-on-surface: '#2f3039'
  outline: '#8f8fa0'
  outline-variant: '#454655'
  surface-tint: '#bec2ff'
  primary: '#bec2ff'
  on-primary: '#000da4'
  primary-container: '#5865f2'
  on-primary-container: '#fffdff'
  inverse-primary: '#3f4cda'
  secondary: '#c4c6ce'
  on-secondary: '#2d3036'
  secondary-container: '#46494f'
  on-secondary-container: '#b6b8c0'
  tertiary: '#c5c6cc'
  on-tertiary: '#2e3035'
  tertiary-container: '#73757b'
  on-tertiary-container: '#fffdff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bec2ff'
  on-primary-fixed: '#000569'
  on-primary-fixed-variant: '#222fc2'
  secondary-fixed: '#e0e2ea'
  secondary-fixed-dim: '#c4c6ce'
  on-secondary-fixed: '#191c21'
  on-secondary-fixed-variant: '#44474d'
  tertiary-fixed: '#e2e2e8'
  tertiary-fixed-dim: '#c5c6cc'
  on-tertiary-fixed: '#191c20'
  on-tertiary-fixed-variant: '#45474c'
  background: '#12131b'
  on-background: '#e3e1ed'
  surface-variant: '#34343d'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  badge-xs:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  server-list-width: 72px
  sidebar-width: 240px
  member-list-width: 240px
  gutter: 16px
  item-gap: 8px
  safe-margin: 20px
---

## Brand & Style
The design system adopts a specialized **Corporate / Modern** aesthetic with heavy influences from developer-centric communication platforms. It targets a tech-savvy audience, emphasizing information density, structural hierarchy, and a sense of "digital community." The interface should feel like a functional workspace—efficient, immersive, and organized.

The style utilizes high-contrast tonal layering rather than traditional shadows to create depth. It focuses on a "contained" experience where content is categorized into distinct vertical and horizontal panels, evoking a sense of reliability and technical proficiency.

## Colors
The palette is built on a specific grayscale scale optimized for long-term legibility and reduced eye strain. 
- **Accent (Blurple):** Used for primary actions, active states, and branding.
- **Surface Hierarchy:** The darkest shade (#202225) is reserved for the most distal layer (Server List), progressing to lighter shades as the content moves toward the user. 
- **Text:** High contrast is avoided to prevent vibration; instead, a soft white and a medium gray are used to distinguish between primary content and metadata.

## Typography
The system uses **Inter** exclusively to maintain a systematic, utilitarian feel. 
- **Scale:** Keep font sizes compact to maintain high information density. 
- **Hierarchy:** Use `label-caps` for section headers (e.g., channel categories or member list groups) to provide clear structural breaks without using large font sizes.
- **Badges:** Small, bold text is used for "BOT" or "APP" indicators to ensure they are legible even at minute scales.

## Layout & Spacing
The layout follows a **Fixed-Fluid-Fixed** panel model:
- **Left Rail (Fixed):** 72px width for server/navigation icons.
- **Sidebar (Fixed):** 240px width for navigation trees (channels/categories).
- **Content Area (Fluid):** Expands to fill the remaining space, containing the chat/portfolio items.
- **Right Sidebar (Fixed):** 240px width for the member/status list, hidden on smaller breakpoints.

**Breakpoints:**
- **Mobile (<768px):** Hide both sidebars. Use a "hamburger" drawer to reveal navigation.
- **Tablet (768px - 1024px):** Hide the Right Sidebar (Member List) to prioritize content.
- **Desktop (>1024px):** Full four-panel layout.

## Elevation & Depth
Depth is created through **Tonal Layering** rather than shadows. 
- **Level 0 (Deepest):** Server Rail (#202225).
- **Level 1:** Navigation Sidebar (#2F3136).
- **Level 2 (Active Surface):** Main Content Area (#36393F).
- **Level 3 (Interactive):** Hover states on list items use the Highlight color (#393C43) with no shadow.

**Exception:** Context menus and tooltips may use a subtle, 45% opacity black shadow with a 4px blur to separate them from the main panels.

## Shapes
The system utilizes a mix of geometric shapes to signal interactivity:
- **Server Icons:** Circles that transition to `rounded-lg` on hover.
- **Pills:** Vertical rounded rectangles (width 4px) used for notification indicators.
- **Badges/Buttons:** `rounded-sm` (4px) for a sharp, technical look.
- **Inputs:** `rounded-md` (8px) for a modern, accessible feel in the message bar.

## Components
- **Server Icons:** 48x48px circular containers. Active icons feature a white vertical "pill" on the far left of the rail.
- **Channel Items:** Use a # (hashtag) icon prefix in `neutral-muted-text`. On hover, the background changes to `highlight-surface` and text to `neutral-main-text`.
- **Message Blocks:** Compact layouts. Avatar (40x40px) is top-aligned with the username. Sub-messages from the same user within a time frame omit the avatar and use a 56px left margin.
- **Embed Cards:** Projects are displayed as cards with a solid 4px left border in `primary_color_hex`. The card background is `tertiary_background_hex`.
- **Status Indicators:** 10px circles positioned at the bottom-right of avatars. Green (online), Yellow (idle), Red (dnd), Gray (offline).
- **Message Input:** A sticky container at the bottom of the content area. It features a slightly darker background than the main surface and uses a "plus" icon in a circle for attachments.
- **Badges:** "APP" or "BOT" badges use the `primary_color_hex` background with `badge-xs` typography and 4px corner radius.
