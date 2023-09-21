import classes from "./ProcessList.module.css";

const ProcessList = () => {
  return (
    <div className={classes.processList}>
      <h1>Planning</h1>
      <ul>
        <li>
          We will discuss your goals and come up with a solution that fits your
          budget.
        </li>
        <li>
          This will involve several things such as which technologies we decide
          to implement, what databases (if any) we will need, and what hosting
          platform works best for you. Don’t worry about the technical part
          though. I’ll take care of all of that.
        </li>
      </ul>
      <h1>Design</h1>
      <ul>
        <li>
          I will put together a mockup design that will closely resemble what
          the pages of your site will look like.
        </li>
        <li>
          This mockup may include some stand-in graphics, photos, and other
          content. Your job will be to provide the content to fill in those
          stand-ins for the final product.
        </li>
        <li>
          We can make revisions where necessary to the mockup design to get the
          look and feel you want for your site.
        </li>
        <li>
          The design phase will be completed once we have all the pages
          signed-off on by you, and all content you want in the site is
          provided.
        </li>
      </ul>
      <h1>Build</h1>
      <ul>
        <li>
          Once the design has been approved and the content has been provided, I
          will get to work writing the code and building the out the site based
          on our design.
        </li>
        <li>
          During this point, we will stay in communication to discuss progress
          and come up with solutions any issues that may arise
        </li>
      </ul>
      <h1>Launch</h1>
      <ul>
        <li>
          When the last line of code is written and all the files are in order,
          we will launch your site.
        </li>
        <li>
          This includes registering a domain name, setting up SSL certificates,
          and hosting servers. I’ll take care of everything.
        </li>
      </ul>
      <h1>Maintenance</h1>
      <ul>
        <li>
          Once your site is live, there will be things that need to be addressed
          from time to time.
        </li>
        <li>
          These can be regular updates to the site, bug fixes, and other things.
          I will take care of keeping your site active and working properly.
        </li>
      </ul>
    </div>
  );
};

export default ProcessList;
