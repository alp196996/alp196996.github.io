# 📮 Events

## BountyCreateEvent <span class="VPBadge info">cancelable</span>

<p>This event is called when a bounty is about to be registered. A bounty can be created by a player using the <code>/bounty</code> command, by a command block or the console using the same command, or by the <a href="./../features/auto-bounties">auto bounty feature</a> which sets a bounty onto whoever kills a player illegally. <code>event#getCause()</code> returns the cause of the creation. Other plugins can use the <code>PLUGIN</code> event cause.</p>

## BountyIncreaseEvent <span class="VPBadge info">cancelable</span>

<p>This event is called when a bounty's reward increases, either because a player increased it manually using <code>/bounty</code> or because the auto-bounty increased a player's bounty. <code>event#getCause()</code> returns the cause of the increase. The amount of money added to the bounty can be edited using <code>event#setAdded(double)</code>.</p>

## BountyExpireEvent <span class="VPBadge info">cancelable</span>

<p>This event is called either when a bounty fully expires or if the total amount of the bounty drops. A bounty can decrease for several reasons: an admin running <code>/bounty remove</code>, a player removing the bounty they created by right clicking the bounty item in the bounties list, or due to the bounty expiration system (if enabled).</p>
<p>This event is called when a bounty expires, either because of an admin running <code>/bounty remove</code> or due to a player removing the bounty he created by right clicking the bounty item in the bounties list. <code>event#getCause()</code> returns the cause of the expiration.</p>

## BountyClaimEvent <span class="VPBadge info">cancelable</span>

<p>This event is called when a player claims a bounty after killing the bounty target.</p>

## HunterLevelUpEvent

<p>Called when a player levels up by claiming a bounty (this event is always called after the claim event).</p>

## HunterTargetEvent <span class="VPBadge info">cancelable</span>

<p>Called when a player targets another player using the bounty list.</p>
