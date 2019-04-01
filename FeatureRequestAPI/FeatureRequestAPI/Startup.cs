using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using FeatureRequestAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Net;

namespace FeatureRequestAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddDbContext<FeatureRequestAPIContext>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("FeatureRequestAPIContext")));

            //services.ConfigureApplicationCookie(o => o.LoginPath = new PathString("/login"));
            //services.ConfigureApplicationCookie(o => o.LogoutPath = new PathString("/logout"));
            //services.ConfigureApplicationCookie(o => o.AccessDeniedPath = new PathString("/accessdenied"));
            //services.ConfigureApplicationCookie(o => o.Events = new CookieAuthenticationEvents()
            //{
            //    OnRedirectToAccessDenied = context =>
            //    {
            //        if (context.Request.Path.StartsWithSegments("/api"))
            //        {
            //            context.Response.StatusCode = 403;
            //            return Task.FromResult(0);
            //        }

            //        context.Response.Redirect(context.RedirectUri);
            //        return Task.FromResult(0);

            //    },
            //    OnRedirectToLogin = context =>
            //    {
            //        if (context.Request.Path.StartsWithSegments("/api"))
            //        {
            //            context.Response.StatusCode = 401;
            //            return Task.FromResult(0);
            //        }

            //        context.Response.Redirect(context.RedirectUri);
            //        return Task.FromResult(0);
            //    }
            //});

                services.AddCors(options =>
                {
                    options.AddPolicy("CorsPolicy",
                        builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
                });
    }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("CorsPolicy");
            app.UseMvc();
        }
    }
}
